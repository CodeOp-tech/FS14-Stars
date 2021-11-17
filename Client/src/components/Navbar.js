import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return  (
         <nav className="Navbar">
              <ul className="ulNav">
                   <li><NavLink to="/" exact>Home</NavLink></li>
                   <li><NavLink to="/signupform">Signup Form</NavLink></li>
                   <li><NavLink to="/denisebview">DeniseB View</NavLink></li>
                   <li><NavLink to="/ingabview">IngaB View</NavLink></li>
                   <li><NavLink to="/rebeccagview">RebeccaG View</NavLink></li>
                   <li><NavLink to="/login"> Log In </NavLink></li>
                   <li><NavLink to="/exerciselist">Exercise List</NavLink></li>
                   <li><NavLink to="/userslist">Users List</NavLink></li>
                   <li><NavLink to="/teacherslist">Teachers List</NavLink></li>
                 </ul>
         </nav>
   );
}

export default Navbar;
