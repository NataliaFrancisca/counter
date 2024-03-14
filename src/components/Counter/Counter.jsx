import { useCounter } from "../../hooks/useCounter";
import {CounterComponentStyled} from "./Counter.style";
import Team from "../Team/Team";
import Menu from "../Menu/Menu";

const Counter = ({onToggleModal}) => {

    const { counterHomeTeam, counterVisitorTeam, onIncrement, onDecrement, onRestartCounter, onSaveMatchScore} = useCounter();

    return(
        <>
            <Menu onToggleModal={onToggleModal} onRestartCounter={onRestartCounter} onSaveMatchScore={onSaveMatchScore}/>

            <CounterComponentStyled>
                <Team
                    name={'home'} 
                    counter={counterHomeTeam} 
                    onIncrement={onIncrement.homeTeam} 
                    onDecrement={onDecrement.homeTeam}
                />
                    <span>VS</span>
                <Team 
                    name={'visitor'} 
                    counter={counterVisitorTeam} 
                    onIncrement={onIncrement.visitorTeam} 
                    onDecrement={onDecrement.visitorTeam} 
                />
            </CounterComponentStyled>
        </>
        
    )
}

export default Counter;