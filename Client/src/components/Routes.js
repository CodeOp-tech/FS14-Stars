import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomeView from '../components/HomeView';
import SignupForm from '../components/SignupForm';
import DeniseBView from '../views/DeniseBView';
import IngaBView from '../views/IngaBView';
import RebeccaGView from '../views/RebeccaGView';
import ShandyRView from '../views/ShandyRView';
import Error404View from '../components/Error404View';


function Routes() {
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

               {/* ShandyR View */}
               <Route path="/shandyrview">
                    <ShandyRView />
               </Route>

               {/* None of the routes matched: Error 404! */}
               <Error404View />
               
        </Switch>
        
    );
}

export default Routes;