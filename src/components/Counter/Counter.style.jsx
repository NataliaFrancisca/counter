import styled from "styled-components";

export const CounterComponentStyled = styled.section`
    min-width: 50%;
    max-width: 90%;
    width: auto;

    padding: 20px;
    border: solid black 6px;
    border-radius: 4px;

    background-color: #764AF1;

    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    align-items: center;

    color: #FFFFFF;

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