import styled from "styled-components";
import { Button } from "../../styles/elements";

import { useSelector, useDispatch } from "react-redux";

import { formatDate } from "../../utils/format_date";

const BoardButtonsStyled = styled.section`
    width: 90%;
    display: flex;
    justify-content: center;
`

const BoardButtons = () => {

    const dispatch = useDispatch();

    const counterHome = useSelector(state => state.reducerCountHome);
    const counterVisitor = useSelector(state => state.reducerCountVisitor);

    const onCleanScore = () => {
        dispatch({type: 'cleanScore/visitor'});
        dispatch({type: 'cleanScore/home'});
    }
    
    const onFinishMatch = () => {
        dispatch({type: 'matchs/setMatchs', payload: onSaveMatch()})
        onCleanScore();
    }
    
    const onOpenModal = () => dispatch({type: 'modal/toggle'});
    
    const onSaveMatch = () => {
        const date = new Date();
        const formatedDate = formatDate(date);
    
        const matchData = {
          home: {name: 'home', score: counterHome},
          visitor: {name: 'visitor', score: counterVisitor},
          date: formatedDate
        };
    
        return matchData;
    }

    return(
        <BoardButtonsStyled>
            <Button onClick={onCleanScore} backgroundColor={"#F32424"}>
                <span className="material-symbols-outlined">mop</span>
            </Button>

            <Button onClick={onOpenModal} backgroundColor={"#0096FF"}>
                <span className="material-symbols-outlined">visibility</span>
            </Button>

            <Button onClick={onFinishMatch} backgroundColor={"#3CCF4E"}>
                <span className="material-symbols-outlined">check_small</span>
            </Button>
        </BoardButtonsStyled>
    )
}

export default BoardButtons;