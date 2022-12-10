import React from 'react'
import FCRecipe from './FCRecipe'

export default function FCRecipes(props) {

    // getting the id to delete from child and send it to the parent above

    const getIdToDelInRecipes=(idToDel)=>{
        props.sendIdToDelFromRecipes(idToDel)
    }

    // convert the array to recpies with map function
    const recpies = props.arr.map(recpie =>
        <FCRecipe
            key={recpie.id}
            id={recpie.id}
            name={recpie.name}
            desc={recpie.desc}
            image={recpie.image}
            btnName={props.btnName}
            sendIdToDelFromRecipe={getIdToDelInRecipes}
        />
    )

    // returning the whole array , each one is recipe -FCRcipe
    return (
        <div className='row' >{recpies}</div>
    )
}
