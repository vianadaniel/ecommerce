import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer"

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem("carItems")
  ? JSON.parse(localStorage.getItem("carItems"))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
