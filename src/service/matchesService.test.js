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

    test('O método init deve inicializar uma sessionStorage', () => {
        // no primeiro momento não temos nenhuma sessionStorage com essa chave
        const storage = sessionStorage.getItem(STORAGE_KEY);
        expect(storage).toBeNull();

        // inicio a sessionStorage
        scoreService.init();

        // depois deve retornar um array vazio
        const storageAfter = sessionStorage.getItem(STORAGE_KEY);
        expect(storageAfter).toBe('[]');
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