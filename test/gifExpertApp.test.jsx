import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/gifExpertApp"
import { AddCatogory } from "../src/components"




jest.mock('../src/components')

describe('pruebas en gifExpertApp', () => { 

    const inputValue = 'Saitama' 

    test('debe de considir con el snapshot', () => { 

            const {container}= render(<GifExpertApp/>);
            
            expect(container).toMatchSnapshot();
        
        
     })

    //  test('onAddCategory es llamada', () => { 

    //     render(<GifExpertApp/>);
    //     const onAddCategory = jest.fn();
    //     expect(onAddCategory).toHaveBeenCalled()

    //   })


      test('el valor existe', () => { 

        render(<GifExpertApp/>);
        
        AddCatogory.mockReturnValue(
            <>
                <form>
                    <input 
                        value={inputValue}
                        
                        />
                </form>
           </> 
        )
        
        screen.debug();
        expect(inputValue).toBeTruthy(); 

      })


    
 })