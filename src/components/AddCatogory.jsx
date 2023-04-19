import { useState } from "react"
import PropTypes from "prop-types"


export const AddCatogory = ( { onNewcategoty}) => {


    const [ inputValue, setInputValue] = useState()

    //vamos a usuar el metodo onChange para poder cambiar el valor del input

    const onInputChange = (event)=>{
            setInputValue(event.target.value)
    }

    const onSubmit = (e)=>{
            e.preventDefault();
            const inputValueTrim = inputValue || "";
            if(inputValueTrim.trim().length <= 1) return;
            setInputValue( "")
            onNewcategoty(inputValue.trim());
    }
  return (
    <form onSubmit={ onSubmit} aria-label="form">
        <input
            type="text"
            placeholder="Buscar Gif"
            value= {inputValue}
            onChange={onInputChange}
        />

    </form>
    
  )
}


AddCatogory.propTypes = {
  onNewcategoty: PropTypes.func.isRequired,
}