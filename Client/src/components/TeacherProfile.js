import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Error404View from './Error404View';


    function    TeacherProfile(props) {
            // Get user id from URL
            let { id } = useParams();
            // Get user from current
            // eslint-disable-next-line
            let visitor = props.visitors.find(visitor.id === Number(id));

            // Return 404 if user doesn't exists
            if (!visitor)  {
                return <Error404View />;
            }


            return (
                <div className="ProfileOneView">
                    <h2>Profile of {visitor.name}</h2>
                    <p>Welcome to your profile {visitor.name} with ID {visitor.id}</p>
                    <Link to="/visitors/">back</Link>
                </div>

            );
    };

export default TeacherProfile;
