import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import Cart from './Cart';
import { GlobalContext } from '../Context/Login/Context';
function NavigationBar() {
  const { state, dispatch } = useContext(GlobalContext)

  const logOut = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky z-3">
        <div className="container">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />npm run dev

          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="nav-link ms-auto mb-2  mb-lg-0">Home</Link>
            <Link to="/products" className="nav-link ms-2 mb-2  mb-lg-0">Products</Link>

            <form className="d-flex" role="submit">
          {
            state.user ? (
              <>
                 <p className='mx-3 my-aouto'>{state?.user?.email}</p>
                  <button className="btn btn-outline-primary ms-2" type="submit" onClick={logOut}>Log Out</button>
                  <div className="ms-3">
                    <Cart />
                  </div>
                </>
            ) : ( <>
              <Link to="/signin">
                <button className="btn btn-outline-primary ms-5" type="submit">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-outline-primary ms-2" type="submit">Sign Up</button>
              </Link>
            </>)
          }
            </form>

          </div>
        </div>
      </nav>

    </>
  )
}

export default NavigationBar
