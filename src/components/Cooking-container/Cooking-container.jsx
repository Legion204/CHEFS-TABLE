import PropTypes from 'prop-types';
import WantToCook from "../WantToCook/WantToCook";


const Cooking = ({recipes}) => {
    
    return (
        <div className="w-1/3 m-2">
            <h1 className="font-semibold text-2xl text-center">Want to cook: {recipes.length} </h1>
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
                ></WantToCook>)
            }
        </div>
    );
};

Cooking.propTypes={
    recipes:PropTypes.array
}

export default Cooking;