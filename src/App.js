import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "shazia", age: "24" },
      { name: "ali", age: "25" },
      { name: "najar", age: "26" },
    ],
    showPersons: false
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
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
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
    let Persons = null;
    if (this.state.showPersons){
      Persons = (
           this.state.persons.map(person =>{
             return < Person name={person.name} age={person.age} />
           })
      )
    }
    return (
      <div className="App">
        <p>Hello, Lets start working in React!!</p>

        {/* here we called the bind and passed the reference */}
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        { Persons}
      </div>
    );
  }
} 

export default App;
