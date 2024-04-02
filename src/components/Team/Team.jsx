import React from "react";
import { TeamComponentStyled } from "./Team.style"

const Team = ({name, counter, onIncrement, onDecrement}) => {

    return(
        <TeamComponentStyled>
            <h2 className="team-name">{name}</h2>

            <button id="button-increment" onClick={onIncrement}>{counter}</button>
            <button disabled={counter == 0} id="button-decrement" onClick={onDecrement}>
                -1
            </button> 
        </TeamComponentStyled>
    )
}

export default Team;