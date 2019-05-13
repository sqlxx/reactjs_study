import {createStore} from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore() {
  //const middleware = [thunk]
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //applyMiddleware(...middleware)
  );
}