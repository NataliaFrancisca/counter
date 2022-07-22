import { increment, decrement } from "./actions/counter";
import { useSelector, useDispatch } from "react-redux";

import { Board, ButtonCounter } from "./styles/elements";
import { useEffect, useRef} from "react";
import { Score } from "./components/Score/style";
import TeamComponent from "./components/Team";
import { TeamBoard } from "./components/Team/style";

const stateCounter = state => state;

function App() {

  // const counter = useSelector(stateCounter);
  // const dispatch = useDispatch();

  // const btnDecrementRef = useRef();

  // const onIncrement = () => {
  //   dispatch(increment())
  // }

  // const onDecrement = () => {
  //   dispatch(decrement())
  // }

  // useEffect(() => {
  //   counter == 0 ?  btnDecrementRef.current.disabled = true : btnDecrementRef.current.disabled = false;
  // })

  return (
    <div className="App">

      <Board>
        <TeamBoard nameTeam={'home'} />
          <span>VS</span>
        <TeamBoard nameTeam={'visit'}/>
      </Board>




      {/* <Score />
        <span>X</span>
      <Score /> */}

    
    </div>
  )
}

export default App
