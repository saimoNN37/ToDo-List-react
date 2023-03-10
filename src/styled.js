import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledUl = styled.ul`
display: flex;
list-style: none;
justify-content: center;
background-color: teal;
margin: 0;
`;

export const StyledLi = styled.li`
padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: white;
&.active{
    font-weight: bold;
}
`;