import { StyledSection, Header, ListName, Content } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <ListName>{title}</ListName>
            {extraHeaderContent}
        </Header>
        <Content>
            {body}
        </Content>
    </StyledSection>
);

export default Section;