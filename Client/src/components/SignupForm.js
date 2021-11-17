import React, { useState } from 'react';
import { Row, Form, Button, Col } from 'react-bootstrap';


function SignupForm (props) {
  const[userName, setUsername] = useState('');

function handleChange(event) {
  setUsername(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  props.submitCb(userName);
  setUsername('');
  console.log("handleSubmit") 
}

return (
<div className="AddNewUser">
  <h2>New Account Registration</h2>
  <Form onSubmit={handleSubmit}>
     <Row className="mb-3">
         <Form.Group className="mb-3" controlId="formGridAddress1">
         <Form.Label>Your Name</Form.Label>
         <Form.Control name="userName" value={userName} placeholder="Insert your name..."  onChange={handleChange} required/>
         </Form.Group>

         <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" placeholder="Enter email" onChange={handleChange} required/>
         </Form.Group>

         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" onChange={handleChange} required/>
        </Form.Group>
      </Row>
 
 
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="I am a..." onChange={handleChange} required>
        <option>Teacher</option>
        <option>Student</option>
      </Form.Select>
    </Form.Group>

   
    
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
</div>
    )
};

export default SignupForm;
