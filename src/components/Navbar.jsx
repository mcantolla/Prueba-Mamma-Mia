import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextApp } from "../App"

function Navbar() {

    const c = useContext(ContextApp)


    return (
        <div className="navWrapper">
        <NavLink to='/'>🍕 Pizzeria Mamma Mia!</NavLink>
        <NavLink to='/carrito'>🛒 $ {c.total} </NavLink>
        </div>
    )
  }
  
  export default Navbar
  