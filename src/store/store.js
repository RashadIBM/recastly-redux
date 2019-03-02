import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import { composeWithDevTools } from 'redux-devtools-extension'; // Must npm install --save-dev redux-devtools-extension

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

const store = createStore(
  rootReducer,
  composeWithDevTools( applyMiddleware(thunk) )
);

export default store;