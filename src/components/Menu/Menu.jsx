import { MenuStyled } from "./Menu.style";

const Menu = ({onToggleModal, onRestartCounter, onSaveMatchScore}) => {

    const onFinishMatch = () => {
        onSaveMatchScore();
        onRestartCounter();
    }

    return(
        <MenuStyled>
            <ul>
                <li> 
                    <button className="menu-button menu-button_red" onClick={() => onRestartCounter()}>
                        <span className="material-symbols-outlined">mop</span>
                    </button>
                </li>

                <li> 
                    <button className="menu-button menu-button_blue" onClick={() => onToggleModal()}>
                        <span className="material-symbols-outlined">visibility</span>
                    </button>
                </li>

                <li> 
                    <button className="menu-button menu-button_green" onClick={() => onFinishMatch()}>
                    <span className="material-symbols-outlined">check_small</span>
                    </button>
                </li>
            </ul>
        </MenuStyled>
    )
}

export default Menu;