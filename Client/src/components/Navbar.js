import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {
    return  (
         <nav className="Navbar">
              <ul className="ulNav">
                   {/* Maybe left align? */}
                   <li><NavLink to="/" exact>Home</NavLink></li>
                   <li><NavLink to="/signup">Signup</NavLink></li>
                   <li><NavLink to="/login"> Log In </NavLink></li>
               </ul>    
                   {
                        props.user && (
                         <ul className="ulNav">    
                         <li><NavLink to="/exercises">Exercises</NavLink></li>
                         <li><NavLink to="/studentsprofile">Student Profile</NavLink></li>
                         <li><NavLink to="/teacherslist">Teachers List</NavLink></li>
                         </ul>
                        )
                    }
                   
                   {/* right align stuff? */}
                   {props.user?
                        
                        (
                         <ul className="navbar-nav">
                             <li className="nav-item">
                                 <NavLink className="nav-link" activeClassName="active" to={`/users/${props.user.id}`}>Profile ({props.user.username})</NavLink>
                             </li>
                             <li className="nav-item">
                                 {/* Simulate <NavLink> (it requires 'to' attribute, but we don't have one) */}
                                 <span className="nav-link" style={{ cursor: 'pointer' }} onClick={props.logoutCb}>Logout</span>
                             </li>
                         </ul>
                        )
                   :    
                   (
                    <li><NavLink to="/login"> Log In </NavLink></li>
                         )
                   }

                 
         </nav>
   );
}

export default Navbar;
