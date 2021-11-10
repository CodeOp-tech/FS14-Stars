import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


function SignupForm(props) {
  const[userName, setUsername] = useState('');

function handleChange(event) {
  setUsername(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  props.submitCb(userName);
  setUsername(''); 
}

return (
<div className="AddNewUser">
  <h2>New Account Registration</h2>
  <Form onSubmit={handleSubmit}>
     <Row className="mb-3">
         <Form.Group className="mb-3" controlId="formGridAddress1">
         <Form.Label>Your Name</Form.Label>
         <Form.Control placeholder="Insert your name..." />
         </Form.Group>

         <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>

         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    </Row>
 
 
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="I am a...">
        <option>Teacher</option>
        <option>Student</option>
      </Form.Select>
    </Form.Group>

   
    
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
            
</div>
    )
}

export default SignupForm;
