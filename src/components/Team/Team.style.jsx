import styled from "styled-components";

export const TeamComponentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 40%;
    position: relative;

    .team-name{
        font-size: 1.6em;
        letter-spacing: 4px;
        text-transform: uppercase;

        @media screen and (max-width: 750px){
            font-size: 1.2em;
        }
    }

    button{
        cursor: pointer;
        font-weight: 600;
        font-family: 'Orbitron', sans-serif;
        border-radius: 4px;
        width: 60%;
    }

    #button-increment{
        background-color: gold;
        padding: 40px;
        margin-top: 20px;
        box-shadow: 0px 0px 10px -1px rgba(20,20,20,.5);

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        font-size: 5em;
        font-weight: 600;
        position: relative;

        &:active{
            background-color: goldenrod;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }


        @media screen and (max-width: 550px){
            width: 90%;
        }

        @media screen and (max-width: 850px) and (orientation: landscape){
            padding: 10px;
        }
    }

    #button-decrement{
        background-color: #F2F2F2;
        border-radius: 4px;

        padding: 10px;

        font-size: 1.5em;
        font-weight: 600;

        margin-top: 10px;

        transition: all .6s ease;

        &:hover{
            color: white;
            background-color: #eb1e1e;
        }
    }

`;