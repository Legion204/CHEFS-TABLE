import PropTypes from 'prop-types';

const Ingredients = ({ingredient}) => {
    return (
        <div>
            <ul className='list-disc ml-4'>
                <li>{ingredient}</li>
            </ul>
        </div>
    );
};

Ingredients.propTypes={
    ingredient:PropTypes.string
}

export default Ingredients;