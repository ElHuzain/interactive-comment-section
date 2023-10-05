import {styled} from 'styled-components';

export const StyledRepliesList = styled.div`
    display: flex;
    /* margin-top: var(--spacing-1); */
    width: 100%;

    hr {
        width: 2px !important;
        border: none;
        min-height: 100%;
        margin: 0 1.5rem;
        background-color: var(--neutral-clr-3);
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1); 
        width: 100% !important;
    }

    @media only screen AND (max-width: 480px) {
        hr {
            margin-left: 0;
            margin-right: 1rem;
        }
    }
`