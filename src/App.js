import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import './App.css'; 



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      <Card style= { {width: "18rem"}}>
        <Card.Img
        varient="top"
        scr= "https://images.unplash.com/photo-1599169713100-120531cef331?ixid=auto=format&fit=crop&w=800&q=60"
        />
        <Card.body>
          <Card.Title>Bunny Opal</Card.Title>
          <Card.Text>My bunny Opal is a white bunny with red eyes.</Card.Text>
          <Button varient="primary">Go somewhere</Button>
        </Card.body>
        </Card>
      </div>
    );
  }
  }

export default App;

