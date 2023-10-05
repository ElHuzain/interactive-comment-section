export const selectUserAction = (username) => { return { type: 'setUser', payload: username } };
export const addNewComment = (comment) => { return { type: 'addComment', payload: comment } };
export const addNewReply = (comment, id) => { return { type: 'addReply', payload: { content: comment, id: id } } }

export const prepareDelete = (commentId) => { return { type: 'prepareDelete', payload: commentId } }
export const cancelDelete = () => { return { type: 'cancelDelete' } };
export const deleteComment = () => { return { type: 'deleteComment' } }

export const updateComment = (content, id, isAReply) => { return { type: 'updateComment', payload: { content: content, id: id, isAReply: isAReply } } }

export const makeAVote = (vote, id, isAReply) => { return { type: 'vote', payload: { vote: vote, id: id, isAReply: isAReply } } };