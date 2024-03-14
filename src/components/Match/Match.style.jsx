import styled from "styled-components";


export const MatchStyled = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 10px 0;
    padding: 10px 0;

    width: 100%;

    background-color: #764AF1;
    color: #FFFFFF;

    border: solid black 4px;
    border-radius: 3px;

    #group-of-scores{
        display: flex;
    }

    & #date{
        margin-top: 5px;
        font-size: 1.2em;
        font-weight: 500;
    }


    div.score{
        display: flex;
        align-items: center;
        color: #000000;

        &-bg_winner{
            span, h1{
                background-color: #3CCF4E;
            }
        }

        &-bg_looser{
            span, h1{
                background-color: #F32424;
            }
        }

        &-bg_draw{
            span, h1{
                background-color: #ffd700;
            }
        }
    
        & h1{
            min-width: 4vw;
            font-size: 1.2em;
            text-transform: uppercase;
            padding: 8px 14px;

            border-radius: 3px;
            border: solid #FFFFFF 2px;

            letter-spacing: 3px;

            @media screen and (max-width: 450px){
                font-size: 1em;
            }
        }

        & span{
            min-width: 4vw;
            padding: 10px 8px;
            filter: brightness(90%);
            border: solid #FFFFFF 2px;
            border-radius: 3px;
            font-size: 2.2em;
            margin: 0 2px;
            font-weight: 900;
            text-align: center;
            font-family: "Orbitron", sans-serif;

            @media screen and (max-width: 450px){
                font-size: 1.4em;
            }
        }
    }

   
`