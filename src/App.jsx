import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage'
import NavigationBar from './Components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';
import Product_Card from './Components/Product_Card';
import './Pages CSS/LoginForm.css';
function App() {
  const {state,dispatch} = useContext(GlobalContext)
      {
        
      }
  return (  
    <>

     <NavigationBar />  
           {
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Categories />}/>
                <Route path='/products/category/:categoryname' element={<Products />}/>
                <Route path='/products/:productId' element={<Product_Card />}/>
                <Route path='/signup' element={<Register />}/>
                <Route path='/signin' element={<LoginPage />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        }
    </>
        
  )
}

export default App
