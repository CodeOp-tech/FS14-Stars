import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StudentProfile from '../components/StudentProfile';
import StudentScores from '../components/StudentScores';


function StudentsProfile() {

  return (
        <div>
                <StudentProfile />
                <StudentScores />
        </div>
    )
}
export default StudentsProfile;