import { styled } from 'styled-components';

const Flex = styled.div`
display: flex;
gap: ${props => props.gap || 0}rem;
flex-direction: ${props => props.direction || 'row'};
`

export default Flex;

