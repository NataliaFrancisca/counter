import styled from "styled-components";
import ModalMatchsComponent from ".";

export const ModalMatchs = styled(ModalMatchsComponent)`
    width: 60%;
    min-height: 60%;

    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    z-index: 222;

    padding: 20px;

    border-radius: 4px;
    background-color: #F2F2F2;

    @media screen and (max-width: 850px){
        width: 80%;
    }

    @media screen and (max-width: 650px){
        width: 90%;
    }

    & header{
        display: flex;
        justify-content: space-between;
    }

    & #title-modal{
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

        &{
            scrollbar-width: thin;
            scrollbar-color: #764AF1 #F2F2F2;
        }

        &::-webkit-scrollbar{
            width: 12px;
        }

        &::-webkit-scrollbar-track{
            background-color: #F2F2F2;
        }

        &::-webkit-scrollbar-thumb{
            background-color: #764AF1;
            border-radius: 20px;
            border: 2px solid #F2F2F2;
        }
    }
`

