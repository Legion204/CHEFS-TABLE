import PropTypes from 'prop-types';
import WantToCook from "../WantToCook/WantToCook";
import Currently_Cooking from '../Currently-Cooking/Currently_Cooking';



const Cooking = ({recipes,handelCurrentlyCooking}) => {

    return (
        <div className="w-1/3 m-2">
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
                ></WantToCook>)
            }
            <h1 className="font-semibold text-2xl text-center mt-8 mb-4">Currently cooking: 02 </h1>
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
               <Currently_Cooking></Currently_Cooking> 
            }
        </div>
    );
};

Cooking.propTypes={
    recipes:PropTypes.array,
    handelCurrentlyCooking:PropTypes.func
}

export default Cooking;