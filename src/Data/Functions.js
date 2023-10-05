export function getCommentById(comments, id) {
    return comments.filter(comment => comment.id === id)[0];
}

export function getReplyById(comments, id) {
    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];

        for (let j = 0; j < comment.replies.length; j++) {
            const reply = comment.replies[j];
            if (reply.id === id) return reply;
        }

    }
}

export function getParentByReplyId(comments, id) {
    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];

        for (let j = 0; j < comment.replies.length; j++) {
            const reply = comment.replies[j];
            if (reply.id === id) return comment;
        }

    }
}

export function removeCommentById(comments, id) {
    return comments.filter(comment => comment.id !== id);
}

export function insertComment(comments, comment) {
    return comments.map(comm => {
        if (comm.id !== comment.id) return comm;
        return comment
    })
}