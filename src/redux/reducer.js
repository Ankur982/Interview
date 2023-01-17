import { ADD_TO_CART, GET_PRODUCTS, GET_PRODUCT_ID } from "./actionType"

const initState = {
    products: [],
    currentProduct: {},
    cart : 0
}


export const Reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }

        case GET_PRODUCT_ID:
            return {
                ...state,
                currentProduct: payload
            }

            case ADD_TO_CART:
                return {
                    ...state,
                    cart: state.cart+1
                }
        default: return state
    }
}
