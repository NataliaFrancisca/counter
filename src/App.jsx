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
    dispatch({type: 'matchs/setMatchs', payload: onSaveMatch()})
    dispatch({type: 'cleanScore/visitor'});
    dispatch({type: 'cleanScore/home'});
  }

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

  const onShowModal = () => dispatch({type: 'modal/toggle'});

  return  (
    <main className="App">

      <BackgroundMask filter={modalState} />

      <BoardButtons>
        <Button onClick={onCleanScore} backgroundColor={"rgba(249,76,102,.7)"}>
          <span className="material-symbols-outlined">mop</span>
        </Button>

        <Button onClick={onShowModal} backgroundColor={"#66BFBF"}>
          <span className="material-symbols-outlined">visibility</span>
        </Button>
      </BoardButtons>

      <BoardCounter />

      {modalState && <ModalMatchs /> }

    </main>
  )
}

export default App
