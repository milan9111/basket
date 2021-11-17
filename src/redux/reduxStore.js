import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { fruitsListReducer } from "./fruitsListReducer";
import { basketReducer } from "./basketReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  fruitsPage: fruitsListReducer,
  basketPage: basketReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
