import { useSelector, useDispatch } from "react-redux";

import { Board, ButtonClean } from "./styles/elements";
import { TeamBoard } from "./components/Team/style";

function App() {

  const dispatch = useDispatch();

  const counterHome = useSelector(state => state.reducerCountHome);
  const counterVisited = useSelector(state => state.reducerCountVisitor);

  const onIncrementHome = () => dispatch({type: 'increment/home'});
  const onDecrementHome = () => dispatch({type: 'decrement/home'});

  const onIncrementVisitor = () => dispatch({type: 'increment/visitor'});
  const onDecrementVisitor = () => dispatch({type: 'decrement/visitor'});

  const onCleanScore = () => {
    dispatch({type: 'cleanScore/visitor'});
    dispatch({type: 'cleanScore/home'});
  }

  return  (
    <main className="App">
      <Board>
        <TeamBoard nameTeam={'home'} counterTeam={counterHome} onIncrement={onIncrementHome} onDecrement={onDecrementHome}/>
          <span>VS</span>
        <TeamBoard nameTeam={'visitor'} counterTeam={counterVisited} onIncrement={onIncrementVisitor} onDecrement={onDecrementVisitor} />
      </Board>
    </main>
  )
}

export default App
