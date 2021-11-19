import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
function Navbar(props) {
    return  (
         <nav className="Navbar">
              <ul className="ulNav">
                   {/* left-aligned */}
                   <li><NavLink to="/" exact>Home</NavLink></li>
                   {
                    props.user && (
                        <>
                        <li><NavLink to="/exercises">Exercises</NavLink></li>
                         <li><NavLink to="/studentprofile">Student Profile</NavLink></li>
                         <li><NavLink to="/teacherslist">Teachers List</NavLink></li>
                        </>
                    )
                   }
               </ul>    
               <ul className="ulNav">
                   {/* right-aligned */}
                   {
                       props.user
                       ? (
                            <li><NavLink to="/" onClick={props.logoutCb}>Logout</NavLink></li>
                       )
                       : (
                            <>
                                <li><NavLink to="/signup">Signup</NavLink></li>
                                <li><NavLink to="/login"> Log In </NavLink></li>
                            </>
                       )
                   }
                </ul>
                 
         </nav>
   );
}
export default Navbar;
