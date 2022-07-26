import styled from "styled-components";
import TeamCounterComponent from ".";

export const TeamCounter = styled(TeamCounterComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-width: 40%;
    position: relative;

    .title-team{
        font-size: 1.6em;
        letter-spacing: 4px;
        font-family: 'Albert Sans', sans-serif;
        text-transform: uppercase;

        @media screen and (max-width: 750px){
            font-size: 1.2em;
        }
    }

    .container-points{
        background-color: #FFB4B4;
    
        border-radius: 4px;
        padding: 40px;
        margin-top: 20px;
        box-shadow: 0px 0px 10px -1px rgba(20,20,20,.5);

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        width: 60%;
        cursor: pointer;

        font-size: 5em;
        font-weight: 600;
        font-family: 'Orbitron', sans-serif;

        position: relative;

        @media screen and (max-width: 900px){
            width: 80%;
        }

        @media screen and (max-width: 550px){
            width: 90%;
        }
    }

`
export const ButtonDecrement = styled.button`
    background-color: rgba(249,76,102,.7);
    border-radius: 4px;

    padding: 10px;
    width: 60%;

    cursor: pointer;
    font-size: 1.5em;
    font-weight: 600;

    z-index: 11;

    margin-top: 10px;

    &:hover{
        background-color: #ff1d3fb2;
    }
`