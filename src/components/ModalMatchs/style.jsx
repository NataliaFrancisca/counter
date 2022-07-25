import styled from "styled-components";
import ModalMatchsComponent from ".";

export const ModalMatchs = styled(ModalMatchsComponent)`
    width: 60%;
    height: 60%;


    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    z-index: 222;

    background-color: orangered;
`