import React, { useState } from 'react';
import { Row, Form, Button, Col, FloatingLabel, Dropdown } from 'react-bootstrap';
import '../views/Views.css';

let emptyForm = {
  username: "",
  userType: "",
  password: "",
  email: "",
  experience: "",
  qualifications: "",
  level: "",
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
        props.submitStudentCb(formData);
    }else{
        props.submitTeacherCb(formData);
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
  
  return (
    <div className="container">
     <div className="AddNewUser">
      <h2>New Account Registration</h2>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupUsername" 
           
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" 
          name="username"
          value={formData.username} onChange={handleChange} required
          placeholder="Insert your name..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail" 
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
          name="email"
          value={formData.email} onChange={handleChange} required
          placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword" 
          style={{ width: '30%', height: '100%' }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          name="password" 
          value={formData.password} onChange={handleChange} required
          placeholder="Password" />
          </Form.Group>
      
        {/* <Row className="mb-3">
             <Form.Group className="mb-3" controlId="formGridAddress1" style={{ width: '30%', height: '100%' }}>
             <Form.Label>Username</Form.Label>
             <Form.Control placeholder="Insert your name..." name='username' value={formData.userName} onChange={handleChange} required/>
             </Form.Group>
             <Form.Group controlId="formGridEmail" style={{ width: '30%', height: '100%' }}>
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required/>
             </Form.Group>
             <Form.Group controlId="formGridPassword" style={{ width: '30%', height: '100%' }}>
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" value={formData.password} name="password" onChange={handleChange} required/>
            </Form.Group>
        </Row> */}
        <div>
            <label className="radio-wrapper" data-name="mobile">
                    <h4 className="checkbox-title">I am a Teacher...</h4>
                    <input type="radio" onClick={handleTypeClick} className="radio" name="type" id="radioTypeInput" value="teacher"/>
            </label>
            <label className="radio-wrapper" data-name="mobile">
                    <h4 className="checkbox-title">I am a Student...</h4>
                    <input type="radio" onClick={handleTypeClick} className="radio" name="type" id="radioTypeInput" value="student"/>
            </label>
        </div>
      { formData.userType === "teacher" && (
        <div className="">
              <FloatingLabel controlId="floatingQualifications" label="Qualifications">
                <Form.Control type="qualifications" placeholder="Qualifications" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingExperience" label="Experience">
                <Form.Control placeholder="Experience"  value={formData.experience} onChange={handleChange} type="number" min="1" max="50" />
              </FloatingLabel>
        </div>
      )}
      { formData.userType === "student" && (
        <div className="">  
          <div>
              <Form.Select aria-label="Default select example"onChange={handleChange}>
                {/* <option>Open this select menu</option> */}
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