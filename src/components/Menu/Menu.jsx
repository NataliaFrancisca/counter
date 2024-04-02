import React from "react";
import { MenuStyled } from "./Menu.style";

const Menu = ({ onToggleModal, onRestart, onSaveScore }) => {

    return(
        <MenuStyled data-testid={"menu-component"}> 
            <ul>
                <li> 
                    <button className="menu-button menu-button_red" onClick={() => onRestart()}>
                        <span className="material-symbols-outlined">mop</span>
                    </button>
                </li>

                <li> 
                    <button className="menu-button menu-button_blue" onClick={() => onToggleModal()}>
                        <span className="material-symbols-outlined">visibility</span>
                    </button>
                </li>

                <li> 
                    <button className="menu-button menu-button_green" onClick={() => onSaveScore()}>
                        <span className="material-symbols-outlined">check_small</span>
                    </button>
                </li>
            </ul>
        </MenuStyled>
    )
}

export default Menu;