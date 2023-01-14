import axios from "axios"
import { ADD_TO_CART, GET_PRODUCTS, GET_PRODUCT_ID } from "./actionType"


export const getProducts = () => async (dispatch) => {
    let { data } = await axios.get("https://fakestoreapi.com/products")
    dispatch({
        type: GET_PRODUCTS,
        payload: data
    })

}


export const getProductById = (id) => async (dispatch) => {
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(data)
    dispatch({
        type: GET_PRODUCT_ID,
        payload: data
    })

}

export const getCartNumber = () => async (dispatch) => {
    dispatch({
        type: ADD_TO_CART
    })

}