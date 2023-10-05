import styled from "styled-components";


export const VotingContainer = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 0.6rem;
`;

export const Button = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    background-color: #282A2D;
    border-radius: 20px;
    gap: 0.3rem;
    height: 15%;
`;

export const SumVotes = styled.p `
    font-size: 1.2rem;
    color: ${props => props.color ?? '#777B88'};
    font-weight: 600;
`;