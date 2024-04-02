import React from "react";
import { BackgroundMask } from "./App.style";
import Modal from "./components/Modal/Modal";
import Counter from "./components/Counter/Counter";
import { scoreService } from "./service/matchesService";
import { useModal } from "./hooks/useModal";


function App() {

  const { toggleModal, onToggleModal } = useModal();

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
