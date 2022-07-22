import styled from "styled-components";
import TeamComponent from ".";

export const TeamBoard = styled(TeamComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;


    .title-team{
        font-size: 1.6em;
        letter-spacing: 4px;
        font-family: 'Albert Sans', sans-serif;
        text-transform: uppercase;
        margin: 10px 0;
    }
`