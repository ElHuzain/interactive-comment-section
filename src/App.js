import { AppContainer } from './Components/Styled/AppContainer';
import ConfirmationContainer from './Components/Styled/Confirmation.styled';
import Flex from './Components/Styled/Flex.styled';

import AddComment from './Components/AddComment';
import CommentsList from './Components/CommentsList';
import { StyledButton } from './Components/Styled/CommentComponents.styled';

import { useDispatch, useSelector } from 'react-redux';
import { cancelDelete, deleteComment } from './Data/ActionCreators';

function Confirmation(props) {
  return (
    <ConfirmationContainer>
      <Flex direction="column" gap='1'>
        <h1>Delete Comment</h1>
        <p>Are you sure you want to delete this comment? this will remove the comment and cannot be undone.</p>
        <Flex gap="1">
          <StyledButton onClick={props.handleCancel} type="reverse">NO, CANCEL</StyledButton>
          <StyledButton onClick={props.handleDelete} type="danger">YES, DELETE</StyledButton>
        </Flex>
      </Flex>
    </ConfirmationContainer>
  )
}

function App() {
  const ConfirmationId = useSelector(val => val.confirmation);
  const dispatch = useDispatch();

  const handleCancel = () => dispatch(cancelDelete());
  const handleDelete = () => dispatch(deleteComment());
  const ConfirmationScreen = <Confirmation handleCancel={handleCancel} handleDelete={handleDelete} />;

  return (
    <AppContainer>
      {ConfirmationId > 0 && ConfirmationScreen}
      <CommentsList />
      <AddComment />
    </AppContainer>
  );
}

export default App;
