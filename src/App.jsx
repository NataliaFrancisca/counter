import { increment, decrement } from "./actions/counter";
import { useSelector, useDispatch } from "react-redux";

import { ButtonCounter, DisplayScore } from "./styles/elements";
import { useEffect, useRef} from "react";

const stateCounter = state => state;

function App() {

  const counter = useSelector(stateCounter);
  const dispatch = useDispatch();

  const btnDecrementRef = useRef();

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  useEffect(() => {
    counter == 0 ?  btnDecrementRef.current.disabled = true : btnDecrementRef.current.disabled = false;
  })

  return (
    <div className="App">

      <DisplayScore>
        <ButtonCounter onClick={onIncrement}>+1</ButtonCounter>
        <h1>{counter}</h1>
        <ButtonCounter onClick={onDecrement} ref={btnDecrementRef}>-1</ButtonCounter>
      </DisplayScore>
     
    </div>
  )
}

export default App
