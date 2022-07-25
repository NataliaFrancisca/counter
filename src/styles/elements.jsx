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

export const BackgroundMask = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    inset: ${props => props.filter ? "0px" : 'none'};
`