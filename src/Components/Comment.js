import StyledComment from './Styled/Comment.styled';

import { Rating, Author, CommentItSelf, Action } from './CommentComponents';
import { StyledButton } from './Styled/CommentComponents.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RepliesList from './RepliesList';
import AddComment from './AddComment';

import { prepareDelete, updateComment, makeAVote } from '../Data/ActionCreators';

const Comment = (props) => {
    const { score, user, content, replyingTo, createdAt, id, replies } = props.data;

    const [replying, setReplying] = useState(false);
    const [editing, setEditing] = useState(false);
    const [inputState, setInputState] = useState(content);
    const currentUser = useSelector(val => val.currentUser);
    const dispatch = useDispatch();

    const deleteComment = () => dispatch(prepareDelete(id));
    const closeReply = () => setReplying(false);
    const toggleEditing = () => setEditing(prev => !prev);
    const handleChange = (e) => setInputState(e.target.value);
    const omitChanges = () => {
        if (inputState === '') return;
        const isAReply = replyingTo ? true : false;
        dispatch(updateComment(inputState, id, isAReply))
        setEditing(false);
    }
    const handleVote = (vote) => {
        if (props.data.vote) if (props.data.vote === vote) return;

        const isAReply = replyingTo ? true : false;
        if (props.data.vote) if (props.data.vote !== vote) dispatch(makeAVote(vote, id, isAReply));
        dispatch(makeAVote(vote, id, isAReply));
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            omitChanges();
        } else if (e.key === 'Escape') {
            closeReply();
        }
    }

    function reply() {
        setReplying(prev => !prev);
    }

    return (
        <>
            <StyledComment>
                <Rating voted={props.data.vote} click={handleVote} score={score} />
                <div className='column'>
                    <Author isCurrentUser={user.username === currentUser.username} createdAt={createdAt} author={user} />
                    {
                        editing
                            ? <CommentItSelf keyDown={handleKeyDown} handleChange={handleChange} editable={true} replyingTo={replyingTo} content={content} />
                            : <CommentItSelf replyingTo={replyingTo} content={content} />
                    }
                    {
                        editing
                            ? <StyledButton onClick={omitChanges}>UPDATE</StyledButton>
                            : ''
                    }
                </div>
                <div className='row'>
                    {
                        user.username === currentUser.username ?
                            <>
                                <Action type='delete' click={deleteComment} />
                                <Action type='edit' click={toggleEditing} />
                            </>
                            : <Action type='reply' click={reply} />
                    }
                </div>
            </StyledComment>
            {replying && <AddComment replying={true} closeReply={closeReply} commentAuthor={user.username} commentId={id} />}
            {!props.isReply && replies.length > 0 && <RepliesList replies={replies} />}
        </>
    )
}

export default Comment
