import styled from "styled-components";

export const MenuStyled = styled.menu`
    min-width: 50%;
    max-width: 90%;
    width: auto;


    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
        display: flex;
    }

    button.menu-button{
        border-radius: 50%;
        margin-bottom: 10px;

        height: 50px;
        width: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        color: #FFFFFF;
        background-color: ${props => props.backgroundColor};

        margin-right: 10px;
        transition: filter .6s ease;

        &:hover{
            filter: brightness(50%)
        }
    }

    button.menu-button_red{
        background-color: #F32424;
    }

    button.menu-button_blue{
        background-color: #0096FF;
    }

    button.menu-button_green{
        background-color: #3CCF4E;
    }
`;