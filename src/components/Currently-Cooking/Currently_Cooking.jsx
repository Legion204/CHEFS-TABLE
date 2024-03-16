import PropTypes from 'prop-types';
const Currently_Cooking = ({newRecipe,index}) => {

    const {recipe_name,preparing_time,calories}=newRecipe;

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>{index+1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Currently_Cooking.propTypes={
    newRecipe:PropTypes.object,
    index:PropTypes.number
}

export default Currently_Cooking;
