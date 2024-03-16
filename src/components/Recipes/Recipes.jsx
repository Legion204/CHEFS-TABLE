import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";
import PropTypes from 'prop-types';


const Recipes = ({handelWantToCook}) => {

    const[recipes,setRecipes]=useState([])

    useEffect(()=>{
        fetch('Recipe.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-y-5 m-2">
            {
                recipes.map((recipe,idx)=><Recipe
                handelWantToCook={handelWantToCook}
                key={idx} 
                recipe={recipe}
                ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes={
    handelWantToCook:PropTypes.func
}

export default Recipes;