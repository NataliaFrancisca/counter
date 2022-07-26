import { useSelector, useDispatch } from "react-redux";

import Match from "../Match";

const ModalMatchsComponent = ({className}) => {

    const dispatch = useDispatch();
    const matchs = useSelector(state => state.reducerMatchs);
    const onCloseModal = () => dispatch({type: "modal/toggle"});

    return(
        <section className={className}>
            <header>
                <h1 id="title-modal">Scores</h1>
                <button onClick={onCloseModal}>
                    <span class="material-symbols-outlined">close</span>
                </button>
            </header>

            <div id="list-of-matchs">
                {matchs.map((match, index) => (
                    <Match key={index} matchData={match} />
                ))}
            </div>
        </section>
    )
}

export default ModalMatchsComponent;