import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
    const cart = useSelector((store)=> store.cart)
  return (
    <div className='container'>
        <div>
            <Link to="/" >Home</Link>
        </div>
        <div>
            <Link to="/:id" >Product</Link>
        </div>
        <div>
            Cart Count: {cart}
        </div>
    </div>
  )
}
