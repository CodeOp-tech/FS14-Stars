import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Local from '../helpers/Local';
import Api from '../helpers/Api';


function StudentProfile(props) {
    const [student, setStudent] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    let user = Local.getUser();

    useEffect(() => {
        fetchProfile();
    }, []);

    async function fetchProfile() {
        let response = await Api.getStudent(user.id);
        if (response.ok) {
            setStudent(response.data);
            setErrorMsg('');
        } else {
            setStudent(null);
            setErrorMsg(response.error);
        }
    }

    if (errorMsg) {
        return <h2 style={{ color: 'red' }}>{errorMsg}</h2>
    }

    if (!student) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="ProfileView">
            <h1>Profile View</h1>
            Username: {student.user.username}<br />
            Email: {student.user.email}<br />
            Level: {student.currentLevel} 
        </div>
    );
}


export default StudentProfile;
