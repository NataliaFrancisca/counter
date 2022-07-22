import styled from "styled-components";
import ScoreComponent from ".";

export const Score = styled(ScoreComponent)`
    background-color: #FFB4B4;
    
    border-radius: 4px;
    padding: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    min-width: 50%;

    & h1{
        font-size: 5em;
        font-family: 'Orbitron', sans-serif;
    }
`