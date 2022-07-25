import { useSelector, useDispatch } from "react-redux";

const ModalMatchsComponent = ({className}) => {

    const dispatch = useDispatch();

    const onCloseModal = () => dispatch({type: "modal/toggle"});

    return(
        <div className={className}>
            <h1>MODAL</h1>
            <button onClick={onCloseModal}>close</button>
        </div>
    )
}

export default ModalMatchsComponent;