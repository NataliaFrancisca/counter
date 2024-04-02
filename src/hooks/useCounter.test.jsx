import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { formatDate } from "../utils/formatDate";

const mockMatch = {
    home: {name: 'home', score: 2},
    visitor: {name: 'visitor', score: 6},
    date: formatDate()
}

describe('Hook customizado useCounter', () => {
    test('O método increment deve funcionar corretamente', async() => {
        const { result } = renderHook(() => useCounter());
        const { onIncrement } = result.current;

        expect(result.current.counterHomeTeam).toBe(0);
        expect(result.current.counterVisitorTeam).toBe(0);

     
        await act(async() => {
           onIncrement.homeTeam();
           onIncrement.visitorTeam();
        });


        expect(result.current.counterHomeTeam).toBe(1);
        expect(result.current.counterVisitorTeam).toBe(1);

    });
    
    test('O método decrement deve funcionar corretamente', async() => {
        const { result } = renderHook(() => useCounter());

        await act(async() => {
            result.current.onIncrement.homeTeam();
            result.current.onIncrement.visitorTeam();
        });

        expect(result.current.counterHomeTeam).toBe(1);
        expect(result.current.counterVisitorTeam).toBe(1);

        await act(async() => {
            result.current.onDecrement.homeTeam();
            result.current.onDecrement.visitorTeam();
        });

        expect(result.current.counterHomeTeam).toBe(0);
        expect(result.current.counterVisitorTeam).toBe(0);
    });
    
    test('O método decrement não deve ser executada se o valor do counter é igual a zero', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counterHomeTeam).toBe(0);

        act(() => {
            result.current.onDecrement.homeTeam();
            result.current.onDecrement.visitorTeam();
        });

        expect(result.current.counterHomeTeam).toBe(0);
        expect(result.current.counterVisitorTeam).toBe(0);
    });


    test('O método restart deve ser executada corretamente', () => {
        const { result } = renderHook(() => useCounter());
        const {onIncrement, onRestart} = result.current;

        // devem começar com o counter zerado
        expect(result.current.counterHomeTeam).toBe(0);
        expect(result.current.counterVisitorTeam).toBe(0);

        // o counter vai ser atualizado com increment +5
        act(() => {
            for(let i = 0; i < 5; i++){
                onIncrement.homeTeam();
                onIncrement.visitorTeam();
            }
        })

        // o counter deve estar com o valor de 5
        expect(result.current.counterHomeTeam).toBe(5);
        expect(result.current.counterVisitorTeam).toBe(5);

        // executa o método de reiniciar o counter
        act(() => {
            onRestart();
        });
        
        expect(result.current.counterHomeTeam).toBe(0);
        expect(result.current.counterVisitorTeam).toBe(0);
    });



    test('O método de salvar o resultado da partida está funcionando corretamente', () => {
        const { result } = renderHook(() => useCounter());
        const { onIncrement } = result.current;

   
        // adiciona valores ao counter
        act(() => {
            for(let i = 0; i < 2; i++){
                onIncrement.homeTeam();
            }

            for(let i = 0; i < 6; i++){
                onIncrement.visitorTeam();
            }
        })

        // executa o método de salvar a partida
        act(() => {
            result.current.onSaveScore();
        });

        // expect(resultHook).toStrictEqual(mockMatch);
    });

});