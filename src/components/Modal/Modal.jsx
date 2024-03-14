import Match from "../Match/Match";
import { ModalStyledComponent } from "./Modal.style";
import { scoreService } from "../../service/matchesService";

const Modal = ({onCloseModal}) => {

    const matches = scoreService.get();

    return(
        <ModalStyledComponent>
            <header>
                <h1 id="title-modal">Scores:</h1>
                <button onClick={onCloseModal}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </header>

            {matches.length > 0 && 
                <>
                    {matches.map((match, key) => (
                        <Match match={match} key={key} />
                    ))}
                </>
            }
        </ModalStyledComponent>
    )
}

export default Modal;