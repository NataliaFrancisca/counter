import styled from "styled-components";

export const ButtonClean = styled.button`
    background-color: #EB4747;
    padding: 5px;

    width: 90%;

    cursor: pointer;
`

export const Board = styled.main`
    min-width: 50%;
    max-width: 90%;
    width: auto;

    padding: 20px;
    border: solid black 6px;
    border-radius: 4px;

    background-color: #B2A4FF;

    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    align-items: center;

    @media screen and (max-width: 760px){
        grid-template-columns: 3fr 1fr 3fr;
    }

    & span{
        height: fit-content;
        text-align: center;
        font-size: 2em;
        font-weight: 600;

        padding: 10px;
        border-radius: 4px;

        background-color: rgba(240,240,240,.6);
    }
`