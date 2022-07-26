import styled from "styled-components";

import { Score } from "../../styles/elements";

const MatchStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 10px 0;
    padding: 10px 0;

    width: 100%;

    background-color: #B2A4FF;
    border: solid black 4px;
    border-radius: 3px;

    .scores{
        display: flex;
    }

    & #date{
        margin-top: 5px;
        font-size: 1.2em;
        font-weight: 600;
        font-family: 'IBM Plex Mono', monospace;
    }
`;

const Match = ({matchData}) => {

    const {date, home, visitor} = matchData;

    const checkWhoIsWinner = (firstValue, secondValue) => {
        if(firstValue > secondValue){
            return {colorA: '#0ebf0e', colorB: '#078507'};
        }else if(firstValue == secondValue){
            return {colorA: '#1f0fc7', colorB: '#120785'}
        }else{
            return {colorA: '#c42611', colorB: '#851607'}
        }
    }

    return(
        <MatchStyled>
            <div className="scores">
                <Score backgroundColor={checkWhoIsWinner(home.score, visitor.score)}>
                    <h1>{home.name}</h1>
                    <span>{home.score}</span>
                </Score>

                <Score backgroundColor={checkWhoIsWinner(visitor.score, home.score)}>
                    <span>{visitor.score}</span>
                    <h1>{visitor.name}</h1>
                </Score>
            </div>
            <span id="date">{date}</span>
        </MatchStyled>
    )
}

export default Match;