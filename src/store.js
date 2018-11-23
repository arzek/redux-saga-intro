import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

const middleware = [
  sagaMiddleware,
];


const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)));


sagaMiddleware.run(mySaga)

export default store;



// render the application