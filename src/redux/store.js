import { combineReducers, createStore } from 'redux';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  usersReducer,
});

const store = createStore(rootReducer, window?.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
