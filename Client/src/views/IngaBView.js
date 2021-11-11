// import React from 'react'
// import { View, Text } from 'react-native'


// function IngaBView () {
//     return (
//     <div>
//         <h2>Inga B</h2>
//     </div>
//     )
// }

// export default IngaBView;



import React, { useState } from 'react';
import { Row, Form, Button, Col, FloatingLabel, DropdownButton, Dropdown } from 'react-bootstrap';
import './Views.css';


function SignupForm(props) {
  const[userName, setUserName] = useState();
  const[userType, setUserType] = useState('');
  const[userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');


  function handleChange(event) {
    setUserName(event.target.value);
  }  

  let InitialUsers = {
    name: "",
    type: "",
    password: "",
    email: "",
  };


    function handleSubmit(event) {
    event.preventDefault();
    props.submitCb(InitialUsers); 
    setUserName('');
    setUserType('');
    setUserEmail('');
    setUserPassword('')
  }

  
  function handleTypeClick(event) {
    let newUserType = event.target.value;
    //console.log(newUserType)
    setUserType(userType => newUserType);
  }

 
  

  return (
    <div className="container">
     <div className="AddNewUser">
      <h2>New Account Registration</h2>
      <Form onSubmit={handleSubmit}>
         <Row className="mb-3">
             <Form.Group className="mb-3" controlId="formGridAddress1" style={{ width: '30%', height: '100%' }}>
             <Form.Label>Username</Form.Label>
             <Form.Control placeholder="Insert your name..." name='username'  onChange={handleChange} required/>
             </Form.Group>
             <Form.Group as={Col} controlId="formGridEmail" style={{ width: '30%', height: '100%' }}>
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" placeholder="Enter email" onChange={handleChange} required/>
             </Form.Group>
             <Form.Group as={Col} controlId="formGridPassword" style={{ width: '30%', height: '100%' }}>
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} required/>
            </Form.Group>
          </Row>
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

      { userType === "teacher" && (
      <div className="">
        {/* <h4 className="checkbox-wrapper title-bold section-title">teacher:</h4> */}
              <FloatingLabel controlId="floatingQualifications" label="Qualifications">
                <Form.Control type="qualifications" placeholder="Qualifications" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingExperience" label="Experience">
                <Form.Control type="experience(years)" placeholder="Experience(Years)" onChange={handleChange} type="number" min="1" max="50" />
              </FloatingLabel>
      </div>
      )}
      { userType === "student" && (
      <div className="">  
        {/* <h4 className="checkbox-wrapper title-bold section-title">student:</h4> */}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ marginTop: '15px' }}>
                State your Level
                </Dropdown.Toggle>

                <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">Beginner</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Advanced</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
              {/* <FloatingLabel controlId="floatingBeginnerLevel" label="Beginner Level">
                <Form.Control type="beginner level" placeholder="state your level" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingIntermediateLevel" label="Intermediate Level">
                <Form.Control type="intermediate level" placeholder="state your level" />
              </FloatingLabel>   */}
      </div>
      )}

           {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Qualifications</Form.Label>
            <Form.Control type="text" placeholder="qualifications" />
           </Form.Group>

           <div className="form-group">
                <label className="font-weight-bold" for="inputyearsxp">Years</label>
                <div className="col-4">
                <input id="inputYearsXp" className="form-control border border-dark" name="years" onChange={handleChange} type="number" min="1" max="50"/>
                </div>
            </div>
 */}

        {/* <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="I am a..." onChange={handleChange} required> */}
                  {/* <option>Teacher</option >
            <option>Student</option> */}
          {/* </Form.Select> */}
        {/* </Form.Group> */}

        
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
    )
    };
    export default SignupForm;