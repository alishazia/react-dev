import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "shazia", age: "24" },
      { name: "ali", age: "25" },
      { name: "najar", age: "26" },
    ]
  }
  switchNameHandler = (newName) => {
    // we should directly change the state here
    // this.state.persons[0].name = "pabhu";

    //  using setState
    this.setState({
      persons: [
        { name: newName, age: "24" },
        { name: "ali", age: "25" },
        { name: "najar", age: "27" },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "shazia", age: "24" },
        { name: event.target.value, age: "25" },
        { name: "najar", age: "27" },
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <p>Hello, Lets start working in React!!</p>
        {/* here we called the bind and passed the reference */}
        <button onClick={this.switchNameHandler.bind(this, 'Maximillian!!!!!!!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        {/* here we have used arrow function and it will be executed on the click of the event and it not executing the function here */}
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={()=> {this.switchNameHandler('Maximillian')}} changed={this.nameChangedHandler}>My Hobbies : Cycling</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
