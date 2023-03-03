import { StyledContainer } from "./styled";

const Container = (props) => (
    <StyledContainer>
        {props.children}
    </StyledContainer>
); 

export default Container;