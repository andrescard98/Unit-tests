import { getUser, getUsuarioActivo } from "../../src/base-pruebas-test/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objeto', ()=>{
        const name = 'Andres';
        const testUserActivo = {
            uid: 'ABC567',
            username: name,
        }
        const getUserActivo = getUsuarioActivo(name);

        expect(getUserActivo).toEqual(testUserActivo);
    })
})