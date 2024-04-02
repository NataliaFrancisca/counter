import React from "react";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "./Modal";
import { scoreService } from "../../service/matchesService";
import { formatDate } from "../../utils/formatDate";

jest.mock('../../service/matchesService');

const mockMatches = [
    {
        home: {name: 'home', score: 2},
        visitor: {name: 'visitor', score: 6},
        date: formatDate()
    },

    {
        home: {name: 'home', score: 4},
        visitor: {name: 'visitor', score: 2},
        date: formatDate()
    },

    {
        home: {name: 'home', score: 10},
        visitor: {name: 'visitor', score: 8},
        date: formatDate()
    },
]

const mockOnCloseModal = jest.fn();

beforeEach(() => {
    scoreService.get.mockImplementation(() => mockMatches);
    render(<Modal onCloseModal={mockOnCloseModal} />);
});

describe('Componente <Modal />', () => {
    test('O <header> deve exibir um título e um botão de fechar o modal', async() => {
        const tituloModal = screen.getByText('Scores:');
        expect(tituloModal).toBeInTheDocument();

        const botaoFecharModal = screen.getByRole('button');
        await userEvent.click(botaoFecharModal);

        expect(mockOnCloseModal).toBeCalled();
    });

    test('Deve exibir uma lista de partidas', async() => {
        const listaDePartidas = screen.getAllByRole('article');
        expect(listaDePartidas).toHaveLength(3);
    });

});