import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers/reducer";
import { fetchDataSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchDataSaga);
