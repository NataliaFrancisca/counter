import styled from "styled-components";

export const BoardButtons = styled.div`
    min-width: 50%;
    max-width: 90%;
    width: auto;

    display: flex;
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

    background-color: ${props => props.backgroundColor};

    &:hover{
        color: #FFFFFF;
    }

    &:last-child{
        margin-left: 10px;
    }
`

export const Score = styled.div`
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Mono', monospace;
    color: #FFFFFF;
    
    & h1{
        min-width: 3vw;
        font-size: 1.2em;
        text-transform: uppercase;
        padding: 8px;

        background-color: ${props => props.backgroundColor.colorA};

        border: solid #FFFFFF 2px;
    }

    & span{
        min-width: 3vw;
        padding: 6px;
        background-color: ${props => props.backgroundColor.colorB};
        border: solid #FFFFFF 2px;
        border-radius: 3px;
        font-size: 2em;
        margin: 0 1px;


        font-family: 'IBM Plex Mono', monospace;
        font-weight: 900;
        text-align: center;
    }
`

export const BackgroundMask = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    inset: ${props => props.filter ? "0px" : 'none'};
`