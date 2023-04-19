import { render, screen } from "@testing-library/react"
import { GrifGrid } from "../../src/components/GrifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

// haces pruebas en un hook, hacemos un mock del hook que queremos

jest.mock('../../src/hooks/useFetchGifs') //haga un mock completo de este path



describe('pruebas en GrifGrid', () => { 
    
    const category = 'One Punch'
 
 
    test('debe de mostrar el loading inicialmente ', () => { 


        //le dicemimos como va a funcionar ese hook
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        })
        

        render( <GrifGrid category={category}/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category)).toBeTruthy();



     })

     test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        //mock completo de cualquier hook

        const gifs = [
            {
            id: 'bas',
            title: 'Saitama',
            url: 'https://prueba.com'
        },
        {
            id: 'bas',
            title: 'pepe',
            url: 'https://prueba.com'
        },

    ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false,
        })

        render( <GrifGrid category={category}/>);
        
        expect(screen.getAllByRole('img').length).toBe(2);
        expect(screen.getByText('Saitama')).toBeTruthy();
        expect(screen.getByText('pepe')).toBeTruthy();





     })

 })