import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, filterChange }) => {
  return (
    <>
      <p className={css.find}>Find contacts by name</p>
      <input
        className={css.find_input}
        type="text"
        onChange={filterChange}
        value={filter}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
