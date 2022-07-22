import styled from "styled-components";

export const ButtonCounter = styled.button`
    background-color: #B2A4FF;
    border-radius: 4px;

    padding: 10px;

    font-size: 5em;
    min-width: 100px;
    width: auto;

    cursor: pointer;
`

export const DisplayScore = styled.main`
    background-color: #FFB4B4;
    
    border-radius: 4px;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;


    & h1{
        font-size: 5em;
        margin: 0 50px;
    }
`