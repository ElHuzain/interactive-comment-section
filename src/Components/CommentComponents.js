import { StyledRating, StyledAuthor, StyledAction, StyledCommentItSelf } from './Styled/CommentComponents.styled';


export const Rating = (props) => {
    const {voted} = props;

    return (
        <StyledRating>
            <img onClick={() => props.click('up')} alt='Plus' src={`./images/icon-plus${voted === 'up' ? '-selected.svg' : '.svg'}`} />
            <p>{props.score}</p>
            <img onClick={() => props.click('down')} alt='Minus' src={`./images/icon-minus${voted === 'down' ? '-selected.svg' : '.svg'}`} />
        </StyledRating>
    )
}

export const Author = (props) => {
    return (
        <StyledAuthor>
            <div><img alt='' src={props.author.image.png} /></div>
            <h1>{props.author.username} {props.isCurrentUser && <span>you</span>}</h1>
            <p>{props.createdAt}</p>
        </StyledAuthor>
    )
}

export const Action = (props) => {

    switch (props.type) {
        case 'delete': return <StyledAction onClick={props.click} color='var(--primary-clr-2)'>
            <img alt='' src='./images/icon-delete.svg' />
            <p>Delete</p>
        </StyledAction>;

        case 'reply': return <StyledAction onClick={props.click} color='var(--primary-clr-1)'>
            <img alt='' src='./images/icon-reply.svg' />
            <p>Reply</p>
        </StyledAction>;

        case 'edit': return <StyledAction onClick={props.click} color='var(--primary-clr-1)'>
            <img alt='' src='./images/icon-edit.svg' />
            <p>Edit</p>
        </StyledAction>
        default: return;
    }
}

export const CommentItSelf = (props) => {
    if (props.editable) return <textarea onKeyDown={props.keyDown} onChange={props.handleChange} enabled editable={true} rows='4' cols='50'>
        {props.content}
    </textarea>
    else return (
        <StyledCommentItSelf disabled editable={false} rows='4' cols='50'>
            <>
                {props.replyingTo ? <span>@{props.replyingTo}</span> : ''}{props.content}
            </>
        </StyledCommentItSelf>
    )
}

