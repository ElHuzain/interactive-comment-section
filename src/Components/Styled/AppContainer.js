import { styled } from "styled-components";

export const AppContainer = styled.div`
width: 100%;
height: 100vh;
padding: 16px 0;
max-width: var(--max-width);
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: var(--spacing-1);

@media only screen AND (max-width: 480px) {
    padding: 5px 1rem;
}
`