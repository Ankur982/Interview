import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Product } from '../pages/product/Product'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Product />} />
        </Routes>
    </div>
  )
}
