
import { NavLink } from "react-router-dom";

export const Navbar = () =>{

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="process">Our Process</NavLink>
            </nav>
        </>
    );

}