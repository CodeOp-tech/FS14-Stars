import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return  (
         <nav className="Navbar">
              <ul>
                   <li><NavLink to="/" exact>Home</NavLink></li>
                   <li><NavLink to="/signupform">Signup Form</NavLink></li>
                   <li><NavLink to="/denisebview">DeniseB View</NavLink></li>
                   <li><NavLink to="/ingabview">IngaB View</NavLink></li>
                   <li><NavLink to="/rebeccagview">RebeccaG View</NavLink></li>
                   <li><NavLink to="/shandyrview">ShandyR View</NavLink></li>
                   {/* <li><NavLink to="/error404">Error 404</NavLink></li> */}
                 </ul>
         </nav>
   );
}

export default Navbar;