import { getSaludo } from "../../src/base-pruebas-test/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Andres"', () => {
        const name = 'Andres';
        const message = getSaludo(name);

        expect( message ).toBe(`Hola ${ name }`)
    })

})