import { styled } from 'styled-components';

export const StyledButton = styled.button`

width: fit-content;
padding: 0.8rem 1rem;
background-color: ${props => {
        if (!props.type) return 'var(--primary-clr-1)';
        switch (props.type) {
            case 'reverse': return 'var(--neutral-clr-2)';
            case 'danger': return 'var(--primary-clr-2)';
            default: return;
        }
    }};

font-weight: var(--fw-regular);
color: var(--neutral-clr-5);

border-radius: 10px;

cursor: pointer;

&:hover {
background-color: ${props => {
        if (!props.type) return 'var(--primary-clr-3)';
        switch (props.type) {
            case 'reverse': return 'var(--neutral-clr-3)';
            case 'danger': return 'var(--primary-clr-4)';
            default: return;
        }
    }};
}
`

export const StyledRating = styled.div`
    padding: 0.6rem 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: fit-content;
    height: fit-content;
    border-radius: var(--border-radius);
    background-color: var(--neutral-clr-4);

    color: var(--neutral-clr-1);

    p {
        font-weight: var(--fw-regular);
        margin: 0 auto;
    }

    img {
        height: 15px;
        width: 15px;
        object-fit: contain;
        cursor: pointer;
    }

    .voted {
        outline: 3px solid var(--neutral-clr-1);
        border-radius: 10px;
    }

    @media only screen AND (max-width: 480px) {
        flex-direction: row;
    }
`

export const StyledAction = styled.div`
color: ${props => props.color};
font-weight: var(--fw-bold);
display: flex;
align-items: center;
gap: 0.4rem;

cursor: pointer;

width: fit-content;

&:hover {
    opacity: 0.5;
}
`

export const StyledAuthor = styled.div`
display: flex;
gap: 1rem;
align-items: center;
div {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    overflow: hidden;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
h1 {
    color: var(--neutral-clr-1);
    font-weight: var(--fw-regular);
}
p {
    color: var(--neutral-clr-2);
    font-weight: var(--fw-thin);
}
span {
    border-radius: 3px;
    background-color: var(--primary-clr-1);
    color: var(--neutral-clr-5);
    font-weight: var(--fw-regular);
    padding: 3px 7px;
    font-size: 0.8rem;
    margin-left: 5px;
}
`

export const StyledCommentItSelf = styled.span`
    width: 100%;
    color: var(--neutral-clr-2);
    border-radius: var(--border-radius);
    background-color: transparent;
    ${props => props.editable && 'outline: 2px solid var(--primary-clr-1);'}
    ${props => props.editable && 'padding: 0.5rem;'}
    overflow: hidden;

    span {
        color: var(--primary-clr-1);
        font-weight: var(--fw-bold);
    }
    
    span::after {
        content: ' ';
    }

`

export default StyledCommentItSelf;