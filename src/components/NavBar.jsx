import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/add-DIY">Add DIY</NavLink>
        </nav>
    )
}