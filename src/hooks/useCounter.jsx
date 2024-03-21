import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import { scoreService } from "../service/matchesService";

export const useCounter = () => {
    const [counterHomeTeam, setCounterHomeTeam] = useState(0);
    const [counterVisitorTeam, setCounterVisitorTeam] = useState(0);

    const onIncrement = {
        homeTeam(){
            setCounterHomeTeam((prev) => prev + 1);
        },

        visitorTeam(){
            setCounterVisitorTeam((prev) => prev + 1);
        }
    }

    const onDecrement = {
        homeTeam(){
            if(counterHomeTeam > 0){
                setCounterHomeTeam((prev) => prev - 1);
            }
        },

        visitorTeam(){
            if(counterVisitorTeam > 0){
                setCounterVisitorTeam((prev) => prev - 1);
            }
        }
    }

    const onRestart = () => {
        setCounterHomeTeam(0);
        setCounterVisitorTeam(0);
    }

    const onSaveMatchScore = () => {
        const dateFormated = formatDate();

        const data = {
            home: {name: 'home', score: counterHomeTeam},
            visitor: {name: 'visitor', score: counterVisitorTeam},
            date: dateFormated
        }

        // scoreService.save(data);
        return data;
    }

    return { counterHomeTeam, counterVisitorTeam, onIncrement, onDecrement, onRestart, onSaveMatchScore }
};