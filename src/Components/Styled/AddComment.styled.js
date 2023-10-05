import { styled } from 'styled-components';
import Container from './Container';

export const StyledAddComment = styled(Container)`
width: 100% !important;
gap: 1rem;

display: grid;
grid-template-areas: 'author-area textarea-area button-area';
grid-template-areas: 'textarea-area'
'author-area button-area';
display: flex;
justify-content: space-between;

textarea {
    width: 100%;
    grid-area: 'text-area';
    outline: 1px solid var(--primary-clr-1);
    padding: 0.5rem;
    border-radius: var(--border-radius);
}

img {
    width: 40px;
    height: 40px;
    grid-area: 'author-area';
}

button {
    width: fit-content;
    grid-area: 'button-area';
    height: fit-content;
}


& > div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

`;

export default StyledAddComment;