import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Recipe = () => {
    const qparam = new URLSearchParams(window.location.search);
    const id = qparam.get("id");

    const [recipe , setRecipe] = useState({
        name: ""
    })

    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/${id}`).then((response) => {
            setRecipe(response.data);
        })
    } , [])
  return (
    <div>
      Recipe Name: {recipe.name}
    </div>
  )
}

export default Recipe
