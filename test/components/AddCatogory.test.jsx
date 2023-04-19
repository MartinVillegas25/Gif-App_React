import { fireEvent, render, screen } from "@testing-library/react"
import { AddCatogory } from "../../src/components/AddCatogory"


describe('pruebas en AddCatogory', () => { 

    test('deba de cambiar el valor de la caja de texto', () => { 
            render (<AddCatogory onNewcategoty = {()=>{}}/>)
            
            const input = screen.getByRole('textbox');
            
            fireEvent.input(input, {target: {value: 'Saitama'}});// el segundo argumento es el  evento que recibiriria la funcion
            // screen.debug()

            expect(input.value).toBe('Saitama');
        })

        test('debe de llamar onNewCategory si el unput tiene un valor', () => { 

            const inputValue = 'saitama';

            //para evaluar la funcion lo que hacemos en realizar un mock, que es una simulacion de la funcion, sirve para evauar una funcion, lo declaramos como  jest.fn(), tengo el control de la funcion en particular 

            const onNewcategoty = jest.fn();


            render (<AddCatogory onNewcategoty = {onNewcategoty}/>)

            const input = screen.getByRole('textbox');
            const form = screen.getByRole('form')


            fireEvent.input(input, {target: {value: inputValue}});
            fireEvent.submit(form);


            //despues de los eventos las constantes tiene los nuevo valores alterados por los eventos del fireEvent, por lo q podemos evaluar que el input despues de mandar el fomulario este vacio

            expect(input.value).toBe('');


            //puedo evaluar que la funcion fue llamada, con el metodo toHavaBeenCalled

            expect( onNewcategoty ).toHaveBeenCalled();
            expect( onNewcategoty ).toHaveBeenCalledTimes(1);


            //vamos a evaluar que la funcion fue llamada con el valor del input como argumento

            expect(onNewcategoty).toHaveBeenCalledWith(inputValue);


         })

         test('no debe ser llamada en onNewCategory si el input esta vacio', () => { 


            const onNewcategoty = jest.fn();
            render (<AddCatogory onNewcategoty = {onNewcategoty}/>)
        
            const form = screen.getByRole('form')

            fireEvent.submit(form);          
      
            expect( onNewcategoty ).not.toHaveBeenCalled();


         })


 })