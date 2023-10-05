import { StyledAddComment } from './Styled/AddComment.styled';
import { StyledButton } from './Styled/CommentComponents.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment, addNewReply } from '../Data/ActionCreators';
const AddComment = (props) => {
  const [inputState, setInputState] = useState('');
  const dispatcher = useDispatch();
  const currentUser = useSelector(val => val.currentUser);

  function insertComment() {
    if (inputState === '') return;

    if (props.replying) dispatcher(addNewReply(inputState, props.commentId));
    else dispatcher(addNewComment(inputState));
    props.closeReply();
    setInputState('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      insertComment();
    } else if (e.key === 'Escape') {
      props.closeReply();
    }
  }

  return (
    <StyledAddComment>
      <img alt='author' src={currentUser.image.png}/>
      <textarea onKeyDown={handleKeyDown} value={inputState} onChange={(e) => setInputState(e.target.value)} placeholder="Type your comment.." rows='4'></textarea>
      <div>
        <StyledButton onClick={insertComment}>SEND</StyledButton>
        {props.replying && <StyledButton type='reverse' onClick={props.closeReply}>CANCEL</StyledButton>}
      </div>
    </StyledAddComment>
  )
}

export default AddComment
