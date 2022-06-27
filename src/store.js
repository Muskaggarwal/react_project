import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducers";
// import { cartReducer } from "./reducers/cartReducers";
// import { orderReducer } from "./reducers/orderReducers";

const initialState = {};
//for dev tools / or default fuction
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store
const store = createStore(
//reducers
  combineReducers({
    products: productsReducer,
    // cart: cartReducer,
    // order: orderReducer,
  }),
  initialState,
  //compose middlewares together
  composeEnhancer(applyMiddleware(thunk))
);
export default store;