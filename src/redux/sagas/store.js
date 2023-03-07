import { createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga";
import rootSaga from '.';
import rootReducer from "../reducers/mainReducer"
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(

  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;



