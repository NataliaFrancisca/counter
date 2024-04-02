import { scoreService, STORAGE_KEY } from "./matchesService";
import { formatDate } from "../utils/formatDate";

const mockMatch = {
    home: {name: 'home', score: 2},
    visitor: {name: 'visitor', score: 6},
    date: formatDate()
}

const mockStorageMatch = [mockMatch];

beforeEach(() => {
    sessionStorage.clear();
});

describe('Métodos responsáveis por lidar com o sessionStorage', () => {


    test('teste se o valor é falso', () => {
        scoreService.init();

        const storage = sessionStorage.getItem(STORAGE_KEY);
        expect(storage).toBe('[]');

        scoreService.init();
    });

    test('O método init está funcionando corretamente', () => {
        scoreService.init();

        const storage = sessionStorage.getItem(STORAGE_KEY);
        expect(storage).toBe('[]');
    });

    test('O método save deve salvar os valores de forma correta', () => {
        scoreService.save(mockMatch);
        const storage = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
        expect(storage).toEqual(mockStorageMatch);
    });

    test('O método get deve retornar o sessionStorage [com valores]', () => {
        scoreService.save(mockMatch);
        const storage = scoreService.get();
        expect(storage).toEqual(mockStorageMatch);
    })

    test('O método get deve retornar o sessionStorage [sem valores]', () => {
        const storage = scoreService.get();
        expect(storage).toEqual([]);
    })

    test('O método clean deve limpar o session storage', () => {
        // salvar um valor antes de limpar
        scoreService.save(mockMatch);

        const storage = scoreService.get();
        expect(storage).toEqual(mockStorageMatch);

        scoreService.clean();

        const newStorage = scoreService.get();

        expect(newStorage).toEqual([]);
    });

});