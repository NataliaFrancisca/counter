import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('Componente <Counter />', () => {
    test('Deve renderizar o componente Menu', () => {
        render(<Counter />);

        const menuComponent = screen.getByTestId("menu-component");
        expect(menuComponent).toBeInTheDocument();

        const counterComponent = screen.getByTestId("counter-component");
        expect(counterComponent).toBeInTheDocument();
    });
});