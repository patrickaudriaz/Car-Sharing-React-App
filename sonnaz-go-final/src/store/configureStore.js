import { createStore, combineReducers } from 'redux';
import ridesReducer from '../reducers/rides';
import filtersReducer from '../reducers/filters';

//configurate the redux store and get our two reducers
export default () => {
  const store = createStore(
    combineReducers({
      rides: ridesReducer,
      filters: filtersReducer,
    }),
    //allows us to use the devtools redux for chrome
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
