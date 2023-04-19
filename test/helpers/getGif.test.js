import { getGif } from "../../src/helpers/getgif"


describe('pruebas en getGif', () => { 

        test('debe retornar un array de gifs', async() => { 

            const gifs = await getGif('goku');

            expect(gifs.length).toBeGreaterThan(0);

            expect(gifs[0]).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            })


         })
 })