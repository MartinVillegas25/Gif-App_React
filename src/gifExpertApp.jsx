import { useState } from "react"
import { AddCatogory } from "./components/AddCatogory";



export const GifExpertApp  = () => {

  //cuando tengo q almacenar algo y eso va a cambiar el estado del component, vamos a usar un hook, hay varios, nosotros vamos a usar el useState

  const [category, setCategory] = useState(['Dragon ball', "goku"]);
  const onAddCategory = (newCategory)=>{
      // no usasmos push, asi no lo mutamos, sino q creamos un nuevo arreglo
      setCategory([...category, newCategory]);
      
  }

  return (
    <>
        {/* titulo */}

        <h1>GIF APP</h1>

      {/* input */}
     <AddCatogory 
    //  setCategory = {setCategory}
       
    //vamos a hacerlo de otra forma, que lo unico que haga este componente es obtener el campo y que el componente padre sea el q haga el cambio 
        onNewcategoty = { (value) => onAddCategory(value)}
     />

      {/*Listado de gifs */}
   
      <ol>
      {/* para renderizar los valores que viene de la API, usamos una expresion de JS, donde hacemos un map del arreglo q llega y retornamos los li para cada uno, es obligatorio poner una key, no importa que sea, puede ser cualquier cosa pero debe tener una key para poder renderizarlos */}
          {category.map(category => {
            return <li key={category}> {category}</li>
          })}
          

      </ol>
          {/* gif item */}


    </>
  )
}