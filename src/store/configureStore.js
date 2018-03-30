import { createStore, combineReducers } from 'redux';
import rowReducer from '../reducers/rows';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      rows: rowReducer,
      filters: filtersReducer,
    })
  );

  return store;
};
