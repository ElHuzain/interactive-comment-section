import { StyledCommentsList } from './Styled/CommentsList.styled';
import Comment from './Comment';
import {useSelector} from 'react-redux';

const CommentsList = () => {
    const comments = useSelector(val => val.comments);

    const elements = comments.map((val, index) => {
        return <Comment key={index} isReply={false} data={val} />
    })

    return (
        <StyledCommentsList>
            {elements}
        </StyledCommentsList>
    )
}

export default CommentsList
