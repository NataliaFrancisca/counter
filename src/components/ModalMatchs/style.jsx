import styled from "styled-components";
import ModalMatchsComponent from ".";

export const ModalMatchs = styled(ModalMatchsComponent)`
    width: 50%;
    min-height: 60%;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    z-index: 222;


    padding: 20px;

    border-radius: 4px;
    background-color: #e0eaea;

    & header{
        display: flex;
        justify-content: space-between;
    }

    & h1{
        font-size: 2em;
    }

    & button {
        background-color: transparent;
        cursor: pointer;

        &:hover span{
            color: #FFFFFF;
        }

        & span{
            font-size: 36px;
        }
    }

    & #list-of-matchs {
        flex-direction: column;

        height: 60vh;

        display: block;
        scroll-behavior: smooth;
        overflow-y: auto;

        border-radius: 4px;
        margin: 10px 0;
    }
`

