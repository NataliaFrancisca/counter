import styled from "styled-components";
import TeamComponent from ".";

export const TeamBoard = styled(TeamComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-width: 40%;

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
        padding: 30px;
        margin-top: 20px;
        box-shadow: 0px 0px 10px -1px rgba(20,20,20,.5);

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        width: 50%;

        @media screen and (max-width: 900px){
            width: 80%;
        }

        @media screen and (max-width: 550px){
            width: 90%;
        }

        & h1{
            font-size: 5em;
            font-family: 'Orbitron', sans-serif;
        }
    }
`