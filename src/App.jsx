import { useSelector, useDispatch } from "react-redux";

import { BoardButtons, Button, BackgroundMask} from "./styles/elements";
import { BoardCounter } from "./components/BoardCounter/style";
import { ModalMatchs } from "./components/ModalMatchs/style";

import { formatDate } from "./utils/format_date";

function App() {

  const dispatch = useDispatch();

  const counterHome = useSelector(state => state.reducerCountHome);
  const counterVisitor = useSelector(state => state.reducerCountVisitor);
  const modalState = useSelector(state => state.reducerModal);

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
      home: {name: 'marias', score: counterHome},
      visitor: {name: 'joanas', score: counterVisitor},
      date: formatedDate
    };

    return matchData;
  }

  return  (
    <main className="App">

      <BackgroundMask filter={modalState} />

      <BoardButtons>
        <Button onClick={onCleanScore} backgroundColor={"#F32424"}>
          <span className="material-symbols-outlined">mop</span>
        </Button>

        <Button onClick={onOpenModal} backgroundColor={"#0096FF"}>
          <span className="material-symbols-outlined">visibility</span>
        </Button>

        <Button onClick={onFinishMatch} backgroundColor={"#3CCF4E"}>
          <span className="material-symbols-outlined">check_small</span>
        </Button>
      </BoardButtons>

      <BoardCounter />

      {modalState && <ModalMatchs /> }

    </main>
  )
}

export default App
