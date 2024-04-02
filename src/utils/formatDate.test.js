import { checkValueIsLessThanTen, monthName } from "./formatDate";

describe('FormatDate File', () => {

    test('A função monthName deve retornar o mês de acordo com o número', () => {
        const date = new Date();

        const month = monthName(date.getMonth());
        expect(month).toBe(monthName(date.getMonth()));

        const monthJanuary = monthName(0);
        expect(monthJanuary).toBe('Jan');
    });

    test('A função checkValueIsLessThanTen deve retornar o valor formatado se o mesmo for menor que 10', () => {
        const result = checkValueIsLessThanTen(8);
        expect(result).toBe('08');

        const result_two = checkValueIsLessThanTen(12);
        expect(result_two).toBe(12);
    });
});