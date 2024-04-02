import React from "react";
import Match from "./Match";
import { render, screen } from "@testing-library/react";
import { formatDate } from "../../utils/formatDate";

const mockMatch = {
    home: {name: 'homes', score: 10},
    visitor: {name: 'visitor', score: 10},
    date: formatDate()
}

describe('Component <Match />', () => {

    test('A função checkWhichIsWinner está retornando o estilo correto', async () => {
        render(<Match match={mockMatch}/>);

        const { home, visitor } = mockMatch;

        const homeDiv = screen.getByTestId('home-score');
        const visitorDiv = screen.getByTestId('visitor-score');

        if(home.score > visitor.score){
            expect(homeDiv).toHaveClass('score-bg_winner');
            expect(visitorDiv).toHaveClass('score-bg_looser');
        }
        
        if(home.score < visitor.score){
            expect(visitorDiv).toHaveClass('score-bg_winner');
            expect(homeDiv).toHaveClass('score-bg_looser');
        }

        if(home.score == visitor.score){
            expect(homeDiv).toHaveClass('score-bg_draw');
            expect(visitorDiv).toHaveClass('score-bg_draw');
        }
    });

    test('Deve exibir a data corretamente', () => {
        render(<Match match={mockMatch}/>);

        const data = screen.getByText(mockMatch.date);
        expect(data).toBeInTheDocument();
    });

    test('Deve exibir o nome do time e sua pontuação', () => {
        render(<Match match={mockMatch} />);

        const homeDiv = screen.getByTestId('home-score');
        const visitorDiv = screen.getByTestId('visitor-score');

        const homeName = homeDiv.querySelector('h1');
        expect(homeName).toHaveTextContent(mockMatch.home.name);

        const visitorName = visitorDiv.querySelector('h1');
        expect(visitorName).toHaveTextContent(mockMatch.visitor.name);

        const homeScore = homeDiv.querySelector('span');
        expect(homeScore).toHaveTextContent(mockMatch.home.score);

        const visitorScore = visitorDiv.querySelector('span');
        expect(visitorScore).toHaveTextContent(mockMatch.visitor.score);
    });
});