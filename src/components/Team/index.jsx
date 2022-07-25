import { useEffect, useRef } from "react";
import { ButtonCounter } from "../../styles/elements";

const TeamComponent = ({nameTeam, className, counterTeam, onDecrement, onIncrement}) => {

    const btnDecrementRef = useRef();

    useEffect(() => {
        counterTeam == 0 ? btnDecrementRef.current.disabled = true : btnDecrementRef.current.disabled = false;
    })

    return(
        <section className={className}>
            <h2 className="title-team">{nameTeam}</h2>
            <div className="container-points">
                <ButtonCounter onClick={onIncrement}>+1</ButtonCounter>
                    <h1>{counterTeam}</h1>
                <ButtonCounter onClick={onDecrement} ref={btnDecrementRef}>-1</ButtonCounter> 
            </div>
        </section>
    )
}

export default TeamComponent;



