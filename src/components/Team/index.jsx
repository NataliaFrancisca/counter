import { useEffect, useRef } from "react";

import { ButtonDecrement } from "./style";

const TeamComponent = ({nameTeam, className, counterTeam, onDecrement, onIncrement}) => {

    const btnDecrementRef = useRef();

    useEffect(() => {
        counterTeam == 0 ? btnDecrementRef.current.disabled = true : btnDecrementRef.current.disabled = false;
    })

    return(
        <section className={className}>
            <h2 className="title-team">{nameTeam}</h2>
            <button className="container-points" onClick={onIncrement}>
                {counterTeam}
            </button>
            <ButtonDecrement onClick={onDecrement} ref={btnDecrementRef}>-1</ButtonDecrement> 
        </section>
    )
}

export default TeamComponent;



