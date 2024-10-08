import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState([''])
    //desestructuramos el evento que viene a la funcion
    const onInputChange = ({ target }) =>{
        setInputValue( target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        

        if (inputValue.trim().length <=1) return;
        // setCategories( categories => [ inputValue, ...categories] )
        onNewCategory( inputValue.trim() );
        setInputValue('')
    }
  return (

    <form onSubmit={ onSubmit }>

        <input 
            type="text"
            placeholder="buscar gifs"
            value={ inputValue }
            //obviamos la funcion:
            //onChange={ (event)=> onInputChange(event) }
            onChange={ onInputChange }
    
        />

    </form>

  )
}
