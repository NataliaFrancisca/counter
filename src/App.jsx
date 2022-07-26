import { useSelector } from "react-redux";

import { useState } from "react";

import { Button, BackgroundMask, ModalButtonsFunction } from "./styles/elements";
import { BoardCounter } from "./components/BoardCounter/style";
import { ModalMatchs } from "./components/ModalMatchs/style";
import BoardButtons from "./components/BoardButtons";

function App() {

  const modalState = useSelector(state => state.reducerModal);

  const [modalButtonDetails, setModalButtonDetails] = useState(true);

  return  (
    <main className="App">

      <BackgroundMask filter={modalState} />

      <BoardButtons />
      <BoardCounter />

      {modalButtonDetails && 
        <ModalButtonsFunction>
          <div id="details-about-button">
            <Button backgroundColor={"#F32424"}>
              <span className="material-symbols-outlined">mop</span>
            </Button>
            <p>clean the score</p>
          </div>
        
          <div id="details-about-button">
            <Button backgroundColor={"#0096FF"}>
              <span className="material-symbols-outlined">visibility</span>
            </Button>
            <p>show all the matches</p>
          </div>

          <div id="details-about-button">
            <Button backgroundColor={"#3CCF4E"}>
              <span className="material-symbols-outlined">check_small</span>
            </Button>
            <p>finish the match</p>
          </div>

          <button id="button-start" onClick={() => setModalButtonDetails(!modalButtonDetails)}>START</button>
        </ModalButtonsFunction>
      }

      {modalState && <ModalMatchs /> }

    </main>
  )
}

export default App
