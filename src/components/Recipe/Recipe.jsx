import PropTypes from 'prop-types';
import Ingredients from '../Ingredients/Ingredients';
import { FaRegClock } from "react-icons/fa";
import { GoFlame } from "react-icons/go";

const Recipe = ({recipe,handelWantToCook}) => {
    const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=recipe;
  return (
    <div className='justify-self-center'>
      <div className="card w-96 lg:w-[400px] lg:h-[800px] bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center">
        <h2 className="card-title justify-center">{recipe_name}</h2>
          <p className='mb-4'>{short_description}</p>
          <hr className='line border-solid text-[#2828281A] border-t-2'></hr>
          <div className='text-start'>
          <h2 className='font-medium text-lg mb-4 mt-6'>ingredients: {ingredients.length}</h2>
          <h1>
            {
              ingredients.map((ingredient,idx)=><Ingredients
                key={idx} 
              ingredient={ingredient}
              ></Ingredients>)
            }
          </h1>
          </div>
          <hr className='line border-solid text-[#2828281A] border-t-2'></hr>
          <div className='flex mt-6'>
            <p className='flex justify-center items-center gap-2'><FaRegClock />{preparing_time}</p>
            <p className='flex justify-center items-center gap-2'><GoFlame />{calories}</p>
          </div>
          <div className="card-actions mt-6">
          <button onClick={()=>handelWantToCook({recipe})} className="btn bg-[#0BE58A] rounded-full border-none mr-4">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes={
  recipe:PropTypes.object,
  handelWantToCook:PropTypes.func
}

export default Recipe;
