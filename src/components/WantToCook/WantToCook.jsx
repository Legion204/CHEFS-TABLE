import PropTypes from 'prop-types';

const WantToCook = ({recipe,index,handelCurrentlyCooking,handelSum}) => {
    const{recipe_name,preparing_time,calories}=recipe;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>{index+1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time} minutes</td>
              <td>{calories} calories</td>
              <td><button onClick={()=>{handelCurrentlyCooking(recipe),handelSum(recipe)}} className="btn bg-[#0BE58A] rounded-full border-none mr-4">Preparing</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes={
    recipe:PropTypes.object,
    index:PropTypes.number,
    handelCurrentlyCooking:PropTypes.func,
    handelSum:PropTypes.func
}

export default WantToCook;
