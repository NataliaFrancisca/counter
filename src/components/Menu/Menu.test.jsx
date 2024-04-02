import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "./Menu";

const mockMenuProps = {
    onToggleModal: jest.fn(),
    onRestart: jest.fn(),
    onSaveScore: jest.fn()
}

describe('Componente <Menu />', () => {
    test('Deve exibir uma lista de três botões', () => {
        render(<Menu {...mockMenuProps} />);

        const listaDeBotoes = screen.getAllByRole('button');
        expect(listaDeBotoes).toHaveLength(3);
    });

    test('Deve executar os botões quando forem clicados', async() => {
        
        render(<Menu {...mockMenuProps} />);

        const listaDeBotoes = screen.getAllByRole('button');

        await userEvent.click(listaDeBotoes[0]);
        expect(mockMenuProps.onRestart).toBeCalled();

        await userEvent.click(listaDeBotoes[1]);
        expect(mockMenuProps.onToggleModal).toBeCalled();

        await userEvent.click(listaDeBotoes[2]);
        expect(mockMenuProps.onSaveScore).toBeCalled();
    });
});