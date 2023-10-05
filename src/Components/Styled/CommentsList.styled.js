import { styled } from 'styled-components';

export const StyledCommentsList = styled.div`
display: flex;
flex-direction: column;
gap: var(--spacing-1);
overflow-y: scroll;
width: 100%;
height: 100%;
padding: 5px;

@media only screen AND (max-width: 480px) {
  padding: 3px 0;
}

`;