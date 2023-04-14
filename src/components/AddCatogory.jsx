import { useState } from "react"



export const AddCatogory = ( { onNewcategoty}) => {


    const [ inputValue, setInputValue] = useState()

    //vamos a usuar el metodo onChange para poder cambiar el valor del input

    const onInputChange = (event)=>{
            setInputValue(event.target.value)
    }

    const onSubmit = (e)=>{
            e.preventDefault();
            if(inputValue.trim().length <= 1) return;
            onNewcategoty(inputValue.trim());
            setInputValue( "")
    }
  return (
    <form onSubmit={ onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gif"
            value= {inputValue}
            onChange={onInputChange}
        />

    </form>
    
  )
}
