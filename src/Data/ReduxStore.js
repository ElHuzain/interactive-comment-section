import { createStore } from 'redux';

import data from './data.json';
import Users from './Users.json';

import { getCommentById, getReplyById, getParentByReplyId } from './Functions';

const initial_state = data;

function CommentReducer(state = initial_state, action) {

    switch (action.type) {
        case 'setUser': {
            const User = Users[action.payload]
            return {
                ...state,
                currentUser: User
            };
        }
        case 'addComment': {
            let newId = Math.floor(Math.random() * 1000);
            state.comments.forEach(comment => {
                if (comment.id === newId) newId++;
                comment.replies.forEach(reply => {
                    if (reply.id === newId) newId++;
                })
            })

            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        id: newId,
                        score: 0,
                        replies: [],
                        createdAt: 'Now',
                        content: action.payload,
                        user: state.currentUser
                    }
                ]
            }
        }
        case 'addReply': {
            let parentComment;
            let newId = Math.floor(Math.random() * 1000);
            let originalComment;
            let newComments = [];

            state.comments.forEach(comment => {
                if (comment.id === newId) newId++;
                if (comment.id === action.payload.id) {
                    originalComment = comment
                }
                else comment.replies.forEach(reply => {
                    if (reply.id === action.payload.id) {
                        parentComment = comment;
                        originalComment = reply
                    }
                    if (reply.id === newId) newId++;
                });
            })

            const newComment = {
                id: newId,
                user: state.currentUser,
                score: 0,
                createdAt: 'Now',
                replyingTo: originalComment.user.username,
                content: action.payload.content
            }

            if (parentComment) {
                parentComment.replies.push(newComment);
                newComments.push(parentComment);
                state.comments.forEach(comment => {
                    if (comment.id !== parentComment.id) newComments.push(comment);
                })
            }
            else {
                originalComment.replies.push(newComment);
                newComments.push(originalComment);
                state.comments.forEach(comment => {
                    if (comment.id !== originalComment.id) newComments.push(comment);
                })
            }

            newComments = newComments.sort((v1, v2) => v1.score > v2.score ? -1 : 1);

            return {
                ...state,
                comments: newComments
            }
        }
        case 'prepareDelete': {
            return {
                ...state,
                confirmation: action.payload
            }
        }
        case 'cancelDelete': {
            return {
                ...state,
                confirmation: 0
            }
        }
        case 'deleteComment': {
            let isFound = false;
            let newComments = [];

            newComments = state.comments.filter(comment => comment.id !== state.confirmation);
            if (newComments.length < state.comments.length) isFound = true;

            if (!isFound) {
                newComments.forEach(newComment => {
                    let newReplies = [];
                    newComment.replies.forEach(reply => {
                        if (reply.id !== state.confirmation) newReplies.push(reply);
                    })
                    newComment.replies = newReplies;
                })
            }

            newComments = newComments.sort((v1, v2) => v1.score > v2.score ? -1 : 1);
            return {
                ...state,
                confirmation: 0,
                comments: newComments
            }
        }
        case 'updateComment': {
            const { content, id, isAReply } = action.payload;
            let newComments = [];
            if (isAReply) {

                // Get the reply
                let newReply = getReplyById(state.comments, id);

                // Modify reply
                newReply = {
                    ...newReply,
                    content: content
                }

                // Get parent comment
                let originalComment = getParentByReplyId(state.comments, id);

                // Inject modified reply into parent
                originalComment.replies = originalComment.replies.map(reply => {
                    if (reply.id !== id) return reply;
                    else return newReply
                })

                // Inject modified parent into all comments
                newComments = state.comments.map(comment => {
                    if (comment.id !== originalComment.id) return comment;
                    return originalComment
                })

            } else {
                // Get original comment
                let originalComment = getCommentById(state.comments, id);
                originalComment = {
                    ...originalComment,
                    content: content
                }

                // Inject modified comment into new comments
                newComments = state.comments.map(comment => {
                    if (comment.id !== id) return comment;
                    return originalComment
                })
            }
            newComments = newComments.sort((v1, v2) => v1.score > v2.score ? -1 : 1);
            return {
                ...state,
                comments: newComments
            }
        }
        case 'vote': {
            const { vote, id, isAReply } = action.payload;
            const { vote: previousVote } = isAReply ? getReplyById(state.comments, id) : getCommentById(state.comments, id);
            let voteFunction;
            if (vote === 'up') voteFunction = (score) => previousVote === 'down' ? score + 2 : score + 1;
            if (vote === 'down') voteFunction = (score) => previousVote === 'up' ? score - 2 : score - 1;
            if (vote === 'neutral') voteFunction = (score) => previousVote === 'up' ? score - 1 : score + 1;
            let newComments = [];

            if (isAReply) {
                let originalComment;
                state.comments.forEach(comment => {
                    let newReplies = [];
                    comment.replies.forEach(reply => {
                        if (reply.id !== id) newReplies.push(reply);
                        else {
                            newReplies.push({
                                ...reply,
                                score: voteFunction(reply.score),
                                vote: vote
                            })
                            originalComment = {
                                ...comment,
                                replies: newReplies
                            }
                        }
                    })
                })

                state.comments.forEach(comment => {
                    if (comment.id !== originalComment.id) newComments.push(comment);
                    else newComments.push(originalComment);
                })
            } else {
                state.comments.forEach(comment => {
                    if (comment.id !== id) newComments.push(comment);
                    else newComments.push({
                        ...comment,
                        score: voteFunction(comment.score),
                        vote: vote
                    })
                })
            }
            newComments = newComments.sort((v1, v2) => v1.score > v2.score ? -1 : 1);
            return {
                ...state,
                comments: newComments
            }
        }
        default: return state;
    }
}

const store = createStore(CommentReducer);

export default store;