import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import {  Container, Card, Form, Button  } from 'react-bootstrap';
import {FormControlLabel, FormControl  } from '@material-ui/core';
export class QuizStart extends Component {
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
          choice: { marks}
        } = this.props;
        const { choice, handleChange } = this.props;

        return  (
          <Container className="text-left"> 
          <Card floated='left'>
          <h5>        <Card.Header ><b>Question</b></Card.Header></h5>
          <Form >



<Form.Group controlId="question">
  <Form.Label><b></b> </Form.Label>

</Form.Group>


<b style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "right", width: '100%', height: '3rem'
              }}> Question Type</b>
              
              
            
<Form.Group controlId="type">
    <Form.Label>Type</Form.Label>
          <RadioGroup
                        name="Type1"
            choice={choice}
            onChange={handleChange('rbtn')}
            defaultValue={choice.rbtn}    
          
          >
            <FormControlLabel value="Single Choice" label="Single Choice" control={<Radio />}  />
            <FormControlLabel value="Multiple Choice" label="Multiple Choice"  control={<Radio />}  />
            </RadioGroup>

            </Form.Group>
            <Form.Group controlId="marks">
    <Form.Label>Total Point : </Form.Label>
    <Form.Label><b> {marks}</b> </Form.Label>
  </Form.Group>



  <Card style={{
              display: "flex"
              , border: '1px solid black', width: '100%', height: '30rem',
              justifyContent: "center",
              alignItems: "center"
            }}>
        <h2>Choices</h2>



<br></br>
<Button   variant="primary" onClick={this.continue} type="submit">
  Add Choice
  </Button>


</Card>
 
  <Button style={{ float : 'right' }} variant="primary" onClick={this.next} type="submit">
    Create 
  </Button>





 
  <Button style={{ float : 'right' }} variant="default" onClick={this.exit} type="submit">
Cancel 
  </Button>


          </Form>
            </Card>
            </Container>
    );
  }
}

export default QuizStart;