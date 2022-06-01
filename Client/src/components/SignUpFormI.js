import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../views/Views.css';

let emptyForm = {
  username: "",
  userType: "",
  password: "",
  email: "",
  experience: "",
  qualifications: "",
  currentLevel: "beginner",
};
  function SignUpFormI(props) {
  const [formData, setFormData] = useState(emptyForm);

  function handleChange(event) {
  let {name, value} = event.target
  setFormData(formData => ({...formData, [name]: value}))
  }  

    function handleSubmit(event) {
    event.preventDefault();
    if (formData.userType === "student") {
      //  console.log("hello", formData)
        addStudent(formData);
    }else{
        addTeacher(formData);
    }
   }

  function handleTypeClick(event) {
    let newUserType = event.target.value;
    // console.log(newUserType);
    setFormData(formData => ({
        ...formData, 
        userType: newUserType
    }))
  }

  function addStudent(students) {
    // console.log(students)
    // add new user to database
    fetch('/students', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(students),
    })
      // .then(response => response.json())
      // .then(students => {
      //   setStudents(students);
      // })
      // Redirect to /students
      // history.push('/students');
    }
  
    function addTeacher(teachers) {
      // console.log(teachers)
      fetch('/teachers', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify(teachers),
      }) 
    }
  
  
  return (
    <div className="container">
     <div className="AddNewUser">
      <h2>New Account Registration</h2>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mx-auto" controlId="formGroupUsername" 
           
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" 
          name="username"
          value={formData.username} onChange={handleChange} required
          placeholder="Insert your name..." />
          </Form.Group>

          <Form.Group className="mx-auto" controlId="formGroupEmail" 
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
          name="email"
          value={formData.email} onChange={handleChange} required
          placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mx-auto" controlId="formGroupPassword" 
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          name="password" 
          value={formData.password} onChange={handleChange} required
          placeholder="Password" />
          </Form.Group>
      
        <div>
            <label className="radio-wrapper" data-name="mobile">
                    <h4 className="checkbox-title">I am a Teacher...</h4>
                    <input type="radio" onClick={handleTypeClick} className="radio" name="type" id="radioTypeInput" value="teacher"/>
            </label>
            <label className="radio-wrapper" data-name="mobile">
                    <h4 className="checkbox-title" style={{ paddingTop:'50px'}}>I am a Student...</h4>
                    <input type="radio" onClick={handleTypeClick} className="radio" name="type" id="radioTypeInput" value="student"/>
            </label>
        </div>
      { formData.userType === "teacher" && (
        <div className="">
            
          <Form.Group className="mx-auto" controlId="formGroupQualifications" 
           
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>Qualifications</Form.Label>
          <Form.Control type="text" 
          name="qualifications"
          value={formData.qualifications} onChange={handleChange} required
          placeholder="Your qualifications..." />
          </Form.Group>

          <Form.Group className="mx-auto" controlId="formGroupExperience" 
           
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>Experience</Form.Label>
          <Form.Control type="number" min="1" max="50"
          name="experience"
          value={formData.experience} onChange={handleChange} required
          placeholder="Years of experience(number)..." />
          </Form.Group>
        </div>
      )}
      { formData.userType === "student" && (
        <div className="">  
          <div>
              <Form.Select className="mx-auto" aria-label="Default select example"onChange={handleChange} name="currentLevel" value={formData.currentLevel} 
                style={{ width: '30%', height: '100%' }}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Form.Select>  
            </div>
        </div>
      )}
      <Button variant="primary" type="submit" onClick={handleSubmit} style={{
              cursor: 'pointer',
              background: 'teal',
              color: 'white',
              padding: '0.5rem 2rem',
              marginTop: '2rem'
            }}>
        Submit
      </Button>
    </Form>
  </div>
  </div>
  )}
export default SignUpFormI;