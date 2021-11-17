import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomeView from '../components/HomeView';
import SignUpFormI from './SignUpFormI';
import DeniseBView from '../views/DeniseBView';
import IngaBView from '../views/IngaBView';
import RebeccaGView from '../views/RebeccaGView';
import LogInView from '../views/LogInView';
import ExerciseList from '../views/ExerciseList';
import UsersList from '../views/UsersList';
import TeachersList from '../views/TeachersList';

function Routes(props) {
return (
     
     <Switch> 
             
                {/* Home View: Use "exact" or else this route will match EVERYTHING!  */}
               <Route path="/" exact>
                    <HomeView />
               </Route>

                {/* Signup Form */}
               <Route path="/signup">
                    <SignUpFormI  />
               </Route>
                
                {/* DeniseB View */}
               <Route path="/denisebview">
                    <DeniseBView />
               </Route>

                {/* IngaB View */}
               <Route path="/ingabview">
                    <IngaBView submitCb = {InitialUsers => props.submitCb(InitialUsers)}/>
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

               {/* Exercise List */}
               <Route path="/exerciselist">
                    <ExerciseList />
               </Route>

               <Route path="/userslist">
                    <UsersList />
               </Route>

               <Route path="/teacherslist">
                    <TeachersList />
               </Route>
               
        </Switch>
        
    );
}

export default Routes;