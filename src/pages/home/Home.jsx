import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getCartNumber, getProductById, getProducts } from '../../redux/action'
import "./Home.css"
export const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector((store)=> store.products)
    useEffect(()=>{
        dispatch(getProducts())
    },[])


    const handleProductById = (id) => {
        dispatch(getProductById(id))
        navigate(`/${id}`)
    }


    const handleCartCount = () => {
        dispatch(getCartNumber())
    }


  return (
    <div className='Product_container'>

      {
         data?.map((e,i)=>(
            <div key={i} onClick={()=>handleProductById(e.id)}>
                <img src={e.image} alt={e.title} className='Product_img'/>
                <h1>{e.title}</h1>
                <p>{e.description}</p>
                <p>{e.price}</p>
                <button onClick={handleCartCount}>
                    Add To cart
                </button>

            </div>
        ))
      } 

    </div>
  )
}
