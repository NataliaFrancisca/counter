import React from "react";
import { MatchStyled } from "./Match.style"


const Match = ({match}) => {

    const { date, home, visitor } = match;

    const checkWhichIsWinner = (scoreOne, scoreTwo) => {
        return (scoreOne === scoreTwo) ? 'draw' : (scoreOne > scoreTwo) ? 'winner' : 'looser';
    };

    return(
        <MatchStyled>
            <section id="group-of-scores">
                <div data-testid={'home-score'} className={`score score-bg_${checkWhichIsWinner(home.score, visitor.score)}`}>
                    <h1>{home.name}</h1>
                    <span>{home.score}</span>
                </div>

                <div data-testid={'visitor-score'} className={`score score-bg_${checkWhichIsWinner(visitor.score, home.score)}`}>
                    <span>{visitor.score}</span>
                    <h1>{visitor.name}</h1>
                </div>
            </section>

            <span id="date">{date}</span>
        </MatchStyled>
    )
}

export default Match;