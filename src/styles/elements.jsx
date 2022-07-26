import styled from "styled-components";

export const BoardButtons = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    border-radius: 50%;
    margin-bottom: 10px;

    height: 50px;
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: #FFFFFF;
    background-color: ${props => props.backgroundColor};

    margin-right: 10px;
    transition: filter .6s ease;

    &:hover{
        filter: brightness(50%)
    }
`

export const Score = styled.div`
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Mono', monospace;
    color: #000000;
    
    & h1{
        min-width: 4vw;
        font-size: 1.2em;
        text-transform: uppercase;
        padding: 8px 14px;

        background-color: ${props => props.backgroundColor};
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
        background-color: ${props => props.backgroundColor};
        filter: brightness(90%);
        border: solid #FFFFFF 2px;
        border-radius: 3px;
        font-size: 2.2em;
        margin: 0 2px;

        font-family: 'IBM Plex Mono', monospace;
        font-weight: 900;
        text-align: center;

        @media screen and (max-width: 450px){
            font-size: 1.4em;
        }
    }
`

export const BackgroundMask = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    inset: ${props => props.filter ? "0px" : 'none'};
`