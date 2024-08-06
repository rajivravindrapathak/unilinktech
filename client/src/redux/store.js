// store.js page


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk'; // Corrected import


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
