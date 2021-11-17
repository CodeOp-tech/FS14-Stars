import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomeView from '../components/HomeView';
import SignupForm from '../components/SignupForm';
import DeniseBView from '../views/DeniseBView';
import IngaBView from '../views/IngaBView';
import RebeccaGView from '../views/RebeccaGView';
import LogInView from '../views/LogInView';
import Error404View from '../components/Error404View';


function Routes(props) {
return (
     
     <Switch> 
             
                {/* Home View: Use "exact" or else this route will match EVERYTHING!  */}
               <Route path="/" exact>
                    <HomeView />
               </Route>

                {/* Signup Form */}
               <Route path="/signupform">
                    <SignupForm  />
               </Route>
                
                {/* DeniseB View */}
               <Route path="/denisebview">
                    <DeniseBView />
               </Route>

                {/* IngaB View */}
               <Route path="/ingabview">
                    <IngaBView />
               </Route>

               {/* RebeccaG View */}
               <Route path="/rebeccagview">
                    <RebeccaGView />
               </Route>

               {/* Changed to LogInView */}
               <Route path="/login">
               <LogInView 
                    loginCb={(u, p) => props.loginCb(u, p)} 
                    loginError={props.loginError} 
                />
               </Route>

               {/* None of the routes matched: Error 404! */}
               <Error404View />
               
        </Switch>
        
    );
}

export default Routes;