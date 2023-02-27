import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { filter } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <p className={css.find}>Find contacts by name</p>
      <input
        className={css.find_input}
        type="text"
        onChange={handleChange}
        value={filterValue.filter}
      />
    </>
  );
};

export default Filter;
