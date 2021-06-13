import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { ListGroup, Container, Card, Form, Button, Table,textarea } from 'react-bootstrap';
import {FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import Question from './question';
export class FinalLayout extends Component {
    next = e => {
        e.preventDefault();
        this.props.next();
      };
      prev = e => {
        e.preventDefault();
        this.props.previous();
      };
  
      render() {
        const {
          choice: {question, marks,tittleQuiz,timeAllowed, duration,rbtn, cbox}
        } = this.props;
        const { choice, handleChange } = this.props;

        return  (
          <Container className="text-left"> 
          <Card floated='left'>
          <h5>        <Card.Header ><b>Question</b></Card.Header></h5>
          <Form >



<Form.Group controlId="question">
  <Form.Label><h2><b> {question}</b></h2> </Form.Label>
</Form.Group>




  <Card style={{ display: "flex"
      ,border:'1px solid black', width: '100%' , height:'30rem'}}>
        <h2 style={{   display: "flex",
          justifyContent: "center",
          alignItems: "center",width: '100%' , height:'3rem'}}>Questions</h2>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
   
      <th>Text</th>
      <th>Type</th>
      <th>Choices</th>
      <th>Marks</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{question}</td>
      <td>Multiple Choice</td>
      <td>{marks}</td>
   <td>{marks}</td>
      <td>  
   Delete or Edit
  
</td>
    </tr>

  </tbody>
</Table>
</Card>
 
  <Button style={{ float : 'right' }} variant="primary" onClick={this.next}>
    Create Quiz
  </Button>





 
  <Button style={{ float : 'right' }} variant="default" onClick={this.prev}>
  Cancel
  </Button>


          </Form>
            </Card>
            </Container>
    );
  }
}

export default FinalLayout;