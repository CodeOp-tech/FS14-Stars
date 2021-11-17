import React, { useState } from 'react';
import { Row, Form, Button, Col } from 'react-bootstrap';


function SignupForm(props) {
  const[userName, setUserName] = useState(0);
  const [userType, setUserType] = useState('');

function handleChange(event) {
  setUserName(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  props.submitCb(userName);
  setUserName(''); 
}

function handleTypeClick(event) {
  let newUserType = { userType };
  setUserType(userType => newUserType);
}

function showHideUserInfo(event) {
  if(document.getElementById('shipname').checked){
      document.getElementById('shipinfo').style.display='none';
  } else {
      document.getElementById('shipinfo').style.display='block';
  }
}

return (
<div className="AddNewUser">
  <h2>New Account Registration</h2>
  <Form onSubmit={handleSubmit}>
     <Row className="mb-3">
         <Form.Group className="mb-3" controlId="formGridAddress1">
         <Form.Label>Username</Form.Label>
         <Form.Control placeholder="Insert your name..."  onChange={handleChange} required/>
         </Form.Group>

         <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Password</Form.Label>
         <Form.Control type="email" placeholder="Enter email" onChange={handleChange} required/>
         </Form.Group>

         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Email</Form.Label>
         <Form.Control type="password" placeholder="Password" onChange={handleChange} required/>
        </Form.Group>
      </Row>
 
      <div className="">
        <h4 className="checkbox-wrapper title-bold section-title">I am a Teacher...</h4>
            <label className="radio-wrapper" data-name="mobile"/>
              <input type="radio" onClick={handleTypeClick} className="radio" name="type" id="radioTypeInput"/>
                <Form.Select>
                  <option>Type</option>
                </Form.Select>
                <br />
                <Form.Select>
                  <option>Qualifications</option>
                </Form.Select>
                <br />
                <Form.Select>
                  <option>Experience</option>
                </Form.Select>
                <br />
      </div>

      <div className="">
        <h4 className="checkbox-wrapper title-bold section-title">I am a Student...</h4>
            <label className="radio-wrapper" data-name="mobile"/>
              <input type="radio" onClick={handleTypeClick} className="radio" name="type" id="radioTypeInput"/>
              <Form.Select>
                  <option>Type</option>
                </Form.Select>
                <br />  
                <Form.Select>
                  <option>Start Level</option>
                </Form.Select>
                <br />
                <Form.Select>
                  <option>Current Level</option>
                </Form.Select>
                <br />    
      </div>
 
    {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="I am a..." onChange={handleChange} required> */}
              {/* <option>Teacher</option >
        <option>Student</option> */}
      {/* </Form.Select> */}
    {/* </Form.Group> */}

   
    
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
            
</div>
    )
};

export default SignupForm;


