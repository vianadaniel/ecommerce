import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants"

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { Loading: true, ...state }
    case PRODUCT_LIST_SUCCESS:
      return { Loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { Loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { Loading: true, product: [] }
    case PRODUCT_DETAILS_SUCCESS:
      return { Loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { Loading: false, error: action.payload }
    default:
      return state
  }
}
