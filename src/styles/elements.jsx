import styled from "styled-components";

export const ButtonCounter = styled.button`
    background-color: rgba(240,240,240,.7);
    border-radius: 4px;

    padding: 2px;

    font-size: 1em;
    width: 90%;

    cursor: pointer;
`

export const Board = styled.main`
    width: 60%;
    padding: 20px;
    border: solid black 6px;
    border-radius: 4px;

    background-color: #B2A4FF;

    display: flex;
    align-items: center;
    justify-content: space-around;


    & span{
        font-size: 2em;
        font-weight: 600;

        padding: 10px 50px;
        border-radius: 4px;

        background-color: rgba(240,240,240,.6);
    }
`