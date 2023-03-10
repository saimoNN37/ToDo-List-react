import styled, { css } from "styled-components";

export const List = styled.ul`
    padding-left: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    height: 30px;
    width: 30px;
    background-color: hsl(348, 83%, 47%);
    color: white;
    border: none;
    cursor: pointer;
    
    &:hover {
        background-color: hsl(348, 83%, 57%);
        transition: 1s;
    }

    &:active {
        background-color: hsl(348, 83%, 67%);
        border: 3px solid hsl(348, 92%, 15%);
    }

    ${({done}) => done && css`
        background-color: hsl(120, 100%, 20%);

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

        &:active {
            background-color: hsl(120, 100%, 40%);
            border: 3px solid hsl(120, 95%, 8%);
        }
    `}
`;