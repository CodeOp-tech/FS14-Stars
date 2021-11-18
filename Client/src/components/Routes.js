import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomeView from '../components/HomeView';
import SignUpFormI from './SignUpFormI';
import Exercises from '../views/Exercises';
import ExerciseItems from './ExerciseItems';
import LogInView from '../views/LogInView';
import ExerciseList from './ExerciseList';
import StudentProfile from '../components/StudentProfile';
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
                
               {/* IngaB View
               <Route path="/ingabview">
                    <IngaBView submitCb = {InitialUsers => props.submitCb(InitialUsers)}/>
               </Route> */}

               {/* RebeccaG View / Exercise View */}
               <Route path="/exercises/:id">
                    <ExerciseItems/>
               </Route>
               <Route path="/exercises">
                    <ExerciseList />
               </Route>

               {/* Changed to LogInView */}
               <Route path="/login">
               <LogInView 
                    loginCb={(u, p) => props.loginCb(u, p)} 
                    loginError={props.loginError} 
                />
               </Route>

             
               <Route path="/studentprofile">
                    <StudentProfile />
               </Route>

               <Route path="/teacherslist">
                    <TeachersList />
               </Route>
               
        </Switch>
        
    );
}

export default Routes;