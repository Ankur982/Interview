import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartNumber } from '../../redux/action'

export const Product = () => {
    const dispatch = useDispatch()
    const data = useSelector((store)=> store.currentProduct)


    const handleCartCount = () => {
        dispatch(getCartNumber())
    }

  return (
    <div>
            <div>
                <img src={data.image} alt={data.title} />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p>{data.price}</p>
                <button onClick={handleCartCount}>
                    Add To cart
                </button>
            </div>
        

    </div>
  )
}
