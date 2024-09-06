import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);


  const onAddCategory= ( newCategory ) => {
    console.log(newCategory)
    return setCategories([newCategory,...categories])
  }
  

  return (
    <> 
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={event => onAddCategory(event)}
      />

      {/* listado de categorias */}
      <ol>
        {
            categories.map( (category) =>(
              
              <GifGrid 
                key={category} 
                category={category} 
              />
              
            ))
        }
      </ol>

    </>
  );
};
