import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Team from "./Team";

const mockTeam = {
    name: 'visitor',
    counter: 0,
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
}

describe('Component <Team />', () => {
    test('O nome do time aparece de forma correta', () => {
        render(<Team {...mockTeam} />);

        const teamName = screen.getByText(mockTeam.name);
        expect(teamName).toBeInTheDocument();
    });

    test('O botão de increment está sendo exibido e executado de forma correta', async() => {
        render(<Team {...mockTeam} />);

        const buttonIncrement = screen.getByRole('button', {name: mockTeam.counter});
        await userEvent.click(buttonIncrement);
        expect(mockTeam.onIncrement).toBeCalled();
    });

    test('O botão de decrement está sendo exibido e executado de forma correta', async() => {
        render(<Team {...mockTeam} counter={2} />);

        const buttonDecrement = screen.getByRole('button', {name: -1});
        await userEvent.click(buttonDecrement);
        expect(mockTeam.onDecrement).toBeCalled();
    });

    test('O botão de decrement deve estar desabilitado quando o counter estiver com o valor igual a 0', () => {
        render(<Team {...mockTeam} /> );

        const buttonDecrement = screen.getByRole('button', {name: -1});
        expect(buttonDecrement).toHaveAttribute('disabled');
    });
});