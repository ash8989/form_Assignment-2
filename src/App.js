import React from "react";
import './App.css';
import './components_css/form.css';
import { Component } from "react";
import Form from './components/form';
import DisplayFeedback from "./components/DisplayFeedback";

class App extends Component{
  state = {
    employeeFeedback : []
  }
  createFeedback(name, department, rating) {
    const { employeeFeedback } = this.state;
    const id = employeeFeedback.length + 1;
    const feedback = { id, name, department, rating };
  
    employeeFeedback.push(feedback);
  
    this.setState({ employeeFeedback });
  }

  render(){
    return(
      <div>
        <h1 className="header">Employee Feedback Form</h1>
        <Form createFeedback={this.createFeedback.bind(this)}></Form>
        <DisplayFeedback employeeFeedback={this.state.employeeFeedback} />
      </div>
    )
  }
}

export default App;



// state = {
//   employeeFeedback: [],
// };

// createFeedback(name, department, rating) {
//   const { employeeFeedback } = this.state;
//   const id = employeeFeedback.length + 1;
//   const feedback = { id, name, department, rating };

//   employeeFeedback.push(feedback);

//   this.setState({ employeeFeedback });
// }

// render() {
//   return (
//     <div className="App">
//       <Form createFeedback={this.createFeedback.bind(this)}>
//         <h1>Employee Feedback Form</h1>
//       </Form>
//       <UserDisplay employeeFeedback={this.state.employeeFeedback} />
//     </div>
//   );
// }
// }



















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }