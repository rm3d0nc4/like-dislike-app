import styled from "styled-components";

export const TopicItem = styled.div `
    background-color: #1F2124;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem 0.2rem;
`;

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const AuthorLabel = styled.div `
    color: #5464DB;
    font-size: 1rem;
    font-weight: 600;
    background-color: #282A2D;
    margin:2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    padding: 0.2rem 1.5rem;
`;

export const Tags = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0px;
`;

export const Tag = styled.div `
    color: #D06C32;
    background-color: #312825;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    margin: 5px;
    border-radius: 0.8rem;
`;


export const ChangeActiveButton = styled.button `
    background-color: ${props => props.style?.backgroundColor ?? '#282A2D'};
    padding: 4px 7px;
    borderRadius: 10px;
`;


export const Description = styled.p `
    color: #777B88;
    font-size: 1.2rem;
    margin: 5px;
    border-radius: 0.8rem;
    padding: 0.2rem 0.5rem;
`;



export const DateLabel = styled(AuthorLabel) `
    padding: 0.2rem 0.6rem;

`;