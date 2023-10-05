import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary-clr-1: hsl(238, 40%, 52%);
    --primary-clr-2: hsl(358, 79%, 66%);
    --primary-clr-3: hsl(239, 57%, 85%);
    --primary-clr-4: hsl(357, 100%, 86%);

    --neutral-clr-1: hsl(212, 24%, 26%);
    --neutral-clr-2: hsl(211, 10%, 45%);
    --neutral-clr-3: hsl(223, 19%, 93%);
    --neutral-clr-4: hsl(228, 33%, 97%);
    --neutral-clr-5: hsl(0, 0%, 100%);

    --max-width: 730px;

    --fw-thin: 400;
    --fw-regular: 500;
    --fw-bold: 700;

    --border-radius: 7px;
    --box-shadow: 0px 0px 3px rgba(0,0,0,0.1);

    --spacing-1: 0.7rem;
}

#root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--neutral-clr-4);
    width: 100%;
    height: 100vh;
}

*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: inherit;
    font-family: 'Rubik', Arial;
}

textarea {
    outline: 2px solid var(--primary-clr-1);
    border: none;
    resize: none;
    padding: 0.3rem;
    border-radius: var(--border-radius);
}

button {
    border: none;
    outline: none;
    background-color: transparent;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: var(--primary-clr-1);
    border-radius: 73px;
}
`

export default GlobalStyle;