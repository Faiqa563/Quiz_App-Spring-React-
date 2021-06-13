import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkbox } from '@material-ui/core';
import { ListGroup, Container, Card, Form, Button, Table,textarea } from 'react-bootstrap';
import {FormControlLabel, FormControl} from '@material-ui/core';
export class ChoiseQuiz extends Component {
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
          choice: {question, marks, rbtn}
        } = this.props;
        const { choice, handleChange } = this.props;

        return  (
          <Container className="text-left"> 
          <Card floated='left'>
          <h5>        <Card.Header ><b>Choice</b></Card.Header></h5>
          <Form >

<Form.Group controlId="question">
  <Form.Label><b>Question : {question}</b> </Form.Label>
</Form.Group>


<Form.Group controlId="checkb">
            <FormControlLabel
          control={
            <Checkbox
              value="option"
              choice={choice}
              onChange={handleChange('cbox')}
                        />
          }
          label="Correct Options"
        />
        </Form.Group>

  <Button style={{ float : 'right' }} variant="primary" onClick={this.next} type="submit">
  Add Choice
  </Button>
  <Button style={{ float : 'right' }} variant="default" onClick={this.previous} type="submit">
   Cancel
  </Button>
          </Form>
            </Card>
            </Container>
    );
  }
}

export default ChoiseQuiz;