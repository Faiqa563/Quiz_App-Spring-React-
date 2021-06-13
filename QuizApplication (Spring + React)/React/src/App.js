import React, { Component } from 'react';
import Question   from './question';
import QuizStart from './quizStart';
import ChoiseQuiz from './choiceQuest';
import FinalLayout from './finalLayout';

export class App extends Component {
  state = {
   Quiztitle: '',
    marks: '',
  timeAllowed: '',
  duration: '',
    question: '',
    rbtn:'',
    counter: 1,
    cbox:'',
  };
 next = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  };
previous = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { counter } = this.state;
    const { Quiztitle,marks,timeAllowed,duration,question,rbtn,cbox} = this.state;
    const choice = { Quiztitle,marks,timeAllowed,duration,question ,rbtn,cbox};
if (counter==1)
            return (
          <Question
            next={this.next}
            handleChange={this.handleChange}
            choice={choice}
          />
        );
      
               else if (counter ==2) 
        {
          return (
            <QuizStart
            next={this.next}
              previous={this.previous}
              handleChange={this.handleChange}
              choice={choice}
            />
          );
        }
          
        else if (counter ==3)
        { 
      
            return (
              <ChoiseQuiz
              next={this.next}
              previous={this.previous}
              handleChange={this.handleChange}
              choice={choice}
              />
            );
        }
 else if (counter == 4) 
 {
         
              return (
                <FinalLayout
                next={this.next}
                previous={this.previous}
                handleChange={this.handleChange}
                choice={choice}
                />
              );
   
              }

              else if (counter ==5) 
              {
         
          this.setState({
            counter: 1,
            Quiztitle: '',
            marks: '',
          timeAllowed: '',
            duration: '',
            question: '',
            rbtn:'',
         
            cbox:'', 
        });
          return(
              
           
            <Question
            next={this.next}
            handleChange={this.handleChange}
            choice={choice}
          />


            );
          }

        
    }
  
}

export default App;