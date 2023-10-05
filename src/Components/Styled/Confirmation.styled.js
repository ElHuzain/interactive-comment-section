import {styled} from 'styled-components';
import Container from './Container';

const ConfirmationContainer = styled(Container)`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.3);
    height: 100vh;
    width: 100vw;

    h1 {
        font-weight: var(--fw-regular);
        font-size: 1.2rem;
        color: var(--neutral-clr-1);
    }

    p {
        color: var(--neutral-clr-2);
    }

    & > div {
        height: fit-content;
        width: fit-content;
        max-width: 390px;
        margin: auto;
        background-color: var(--neutral-clr-4);
        border-radius: var(--border-radius);
        padding: 1rem;
    }
`

export default ConfirmationContainer;