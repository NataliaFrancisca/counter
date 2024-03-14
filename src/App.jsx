import { useState } from "react";
import { BackgroundMask } from "./App.style";
import Modal from "./components/Modal/Modal";
import Counter from "./components/Counter/Counter";
import { scoreService } from "./service/matchesService";

function App() {

  const [toggleModal, setToggleModal] = useState(false);

  const onToggleModal = () => setToggleModal((prev) => !prev);

  scoreService.init();

  return  (
    <main className="App">
      
      {toggleModal && <BackgroundMask />}

      <Counter onToggleModal={onToggleModal} />

      {toggleModal && 
        <Modal onCloseModal={onToggleModal} />
      }

    </main>
  )
}

export default App
