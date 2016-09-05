import React, { Component } from 'react';
import Questions from './data.json'
import './App.css';

class App extends Component {

   componentWillMount() {
      this.props = {
         data: Questions
      }
   }

   render() {
      console.info(this.props)
      return (
         <div className="App">
            <div className="question-panel">
               <div className="question">{ this.props.data[0].question }</div>
               <div className="question-image">{ this.props.data[0].images }</div>
               <div className="options">
                  {
                     this.props.data[0].options.map((option, index) => {
                        return <div className="option">{option}</div>
                     })
                  }
               </div>

            </div>
         </div>
      )
   }
}

export default App;
