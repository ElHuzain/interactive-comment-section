import { styled } from 'styled-components';
import Container from './Container';

// import {StyledRating} from './CommentComponents.styled';

const StyledComment = styled(Container)`
position: relative;
display: flex;
justify-content: flex-start;
gap: 1.3rem;
height: fit-content;
.column {
    gap: 1rem;
    display: flex;
    flex-direction: column;
}

width: 100% !important;

.row {
    position: absolute;
    top: 32px;
    right: 2rem;
    display: flex;
    gap: 1rem;
}

@media only screen AND (max-width: 480px){
    flex-direction: column-reverse;
    .row {
        top: unset;
        bottom: 32px;
    }
}
`

export default StyledComment;