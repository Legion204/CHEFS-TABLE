import PropTypes from 'prop-types';
import WantToCook from "../WantToCook/WantToCook";
import Currently_Cooking from '../Currently-Cooking/Currently_Cooking';
import { useState } from 'react';



const Cooking = ({recipes,handelCurrentlyCooking,newRecipes}) => {

  const[totalTime,setTotalTime]=useState(0)
  const[totalCalories,setTotalCalories]=useState(0)


  const handelSum=(recipe)=>{
      const totalTimeSum=totalTime+recipe.preparing_time;
      setTotalTime(totalTimeSum);
      const totalCaloriesSum=totalCalories+recipe.calories;
      setTotalCalories(totalCaloriesSum);
  }
  

    return (
        <div className="lg:w-1/3 m-2">
            <h1 className="font-semibold text-2xl text-center mb-4">Want to cook: {recipes.length} </h1>
            <hr className='line border-solid text-[#2828281A] border-t-2'></hr>
            <table className="table">
                {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
            </table>
            {
                recipes.map((recipe,idx)=><WantToCook
                key={idx} 
                recipe={recipe}
                index={idx}
                handelCurrentlyCooking={handelCurrentlyCooking}
                handelSum={handelSum}
                ></WantToCook>)
            }
            <h1 className="font-semibold text-2xl text-center mt-8 mb-4">Currently cooking: {newRecipes.length} </h1>
            <hr className='line border-solid text-[#2828281A] border-t-2'></hr>
            <table className="table">
                {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
            </table>
            {
               newRecipes.map((newRecipe,idx)=><Currently_Cooking
               key={idx}
               newRecipe={newRecipe}
               index={idx}
               ></Currently_Cooking>) 
            }

            <div className='flex flex-col items-end gap-1'>
            <h1 className='font-medium'>Total Time = <span className='text-[#0BE58A]'>{totalTime}</span> minutes</h1>
            <h1 className='font-medium'>Total Calories = <span className='text-[#0BE58A]'>{totalCalories}</span> calories</h1>
            </div>
        </div>
    );
};

Cooking.propTypes={
    recipes:PropTypes.array,
    handelCurrentlyCooking:PropTypes.func,
    newRecipes:PropTypes.array
}

export default Cooking;