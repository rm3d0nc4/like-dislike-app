import styled from "styled-components";


export const ListContainer = styled.div `
    padding: 1rem;
    border: 4px dashed #1F2124;
    border-radius: 10px;
    margin-top: 1rem;

    @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;