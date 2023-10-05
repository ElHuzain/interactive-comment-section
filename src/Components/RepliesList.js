import { StyledRepliesList } from './Styled/RepliesList.styled';
import Comment from './Comment';

const RepliesList = (props) => {

    const elements = props.replies.map((val, index) => {
        return <Comment key={index} isReply={true} data={val} />
    })

    return (
        <StyledRepliesList>
            <hr />
            <div>
                {elements}
            </div>
        </StyledRepliesList>
    )
}

export default RepliesList
