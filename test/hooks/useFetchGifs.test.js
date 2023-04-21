import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        //los hook no se pueden evaluar de formar aislada, por eso usamos el renderHooks


        const {result} = renderHook( ()=> useFetchGifs('pokemon'))
        // console.log(result); 
        //result es el resultado de ese hook
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
        

     }) 


     //espera el retorno del hook
     
     test('debe de retornar un arreglo de imagenes y el isloading en false', async() => { 

        const {result} = renderHook( ()=> useFetchGifs('pokemon'))

        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

      })    

 })