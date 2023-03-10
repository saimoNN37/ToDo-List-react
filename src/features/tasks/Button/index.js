import styled from "styled-components";

export const StyledButtons = styled.button`
    border: none;
    margin: 0 0 0 20px;
    color: hsl(180, 100%, 25%);
    background-color: transparent;
    transition: 1s;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

`;