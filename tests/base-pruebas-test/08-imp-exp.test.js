import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas-test/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe de retornar undefined si no existe el id', () => {
        const id = 6;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
    });

    test('la longitud de getHeroesByOwner con DC debe de retornar 3', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        expect(heroe).toEqual([{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}]);
        expect(heroe.length).toEqual(3);
    });

    test('la longitud de getHeroesByOwner con Marvel debe de retornar 3', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toEqual(2);
    });
})