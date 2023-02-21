import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px;
    background-color: white;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const ListName = styled.h2`
    margin: 0;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    grid-gap: 20px;
    align-items: center;
    padding: 20px;
`;

export const Content = styled.div`
    padding: 20px;
    border-top: 1px solid #ddd;
`;