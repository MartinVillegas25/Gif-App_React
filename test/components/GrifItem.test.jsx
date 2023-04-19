import { render, screen } from "@testing-library/react";
import { GrifItem } from "../../src/components/GrifItem";

describe('pruebas en GrifItem', () => { 

    const title = 'goku';
    const url = 'https://github.com/goku'

    test('debe de hacer match con el snapshot', () => { 
         const {container} = render( <GrifItem title={title} url={url}/>) 
         expect(container).toMatchSnapshot();
        
     });

     test('debe de mostrar la imagen con la URL y el alt indicado', () => { 
        render( <GrifItem title={title} url={url}/>);
        
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
      })

      test('el titulo debe estar mostrado como texto', () => { 
        render( <GrifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();


       })

 })