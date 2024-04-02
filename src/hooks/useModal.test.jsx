import { renderHook, act } from "@testing-library/react";
import { useModal } from "./useModal";

describe('Hooks customizado useModal', () => {
    test('Deve alterar o valor do hook de forma correta', async() => {
        const { result } = renderHook(() => useModal());
        const { onToggleModal } = result.current;

        expect(result.current.toggleModal).toBe(false);

        await act(async() => {
            onToggleModal();
        });

        expect(result.current.toggleModal).toBe(true);
    });
});