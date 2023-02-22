import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from '../CartData/Cart'
import Product from '../FetchData/Product'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default AllRoutes