import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Card, Form, Button, Table, textarea } from 'react-bootstrap';;
export class Question extends Component {
  next = e => {
    e.preventDefault();
    this.props.next();
  };
  prev = e => {
    e.preventDefault();
    this.props.previous();
  };
  render() {
    const { choice, handleChange } = this.props;
    return (
      <Container className="text-left">
        <Card floated='left'>
          <h3>        <Card.Header className="text-center" >Creat a Qiuz</Card.Header></h3>
          <Form>
            <Form.Group controlId="qtitle">
              <Form.Label>Quiz Ttile</Form.Label>
              <Form.Control type="text"
                onChange={handleChange('qtitle')}


              />
            </Form.Group>

            <Form.Group controlId="marks">
              <Form.Label>Total Points</Form.Label>
              <Form.Control type="text" onChange={handleChange('marks')}
              />
            </Form.Group>


           

            <div style={{
             width: '100%',
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Form.Label>Total Allowed (in  minutes)</Form.Label>
            <Form.Group controlId="timeAllowed" >
              
              <Form.Control type="text" onChange={handleChange('timeAllowed')}
              />
            </Form.Group>

            <Form.Label>Deadlines</Form.Label>
            <Form.Group controlId="deadline"   >
           
              <Form.Control type="date" onChange={handleChange('deadline')}
              />
            </Form.Group>

</div>
            

            <Card style={{
              display: "flex"
              , border: '1px solid black', width: '100%', height: '30rem',
              justifyContent: "center",
              alignItems: "center"
            }}>

              <br></br>
             <b> Question</b>




              <br></br>
              <Button  variant="primary" onClick={this.next} type="submit">
                Add a Question
  </Button>


            </Card>

            <Button style={{ float: 'right' }} variant="primary" onClick={this.next} type="submit">
              Create Quiz
  </Button>

           <Button style={{ float: 'right' }} variant="default" onClick={this.exit} type="submit">
              Cancel
  </Button>

          </Form>
        </Card>
      </Container>
    );
  }
}

export default Question;