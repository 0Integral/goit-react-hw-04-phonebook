import PropTypes from 'prop-types';
export const Filter = ({ filterName }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input onChange={filterName} type="text" name="filter" />
    </label>
  );
};

Filter.propTypes = {
  filterName: PropTypes.func.isRequired,
};
