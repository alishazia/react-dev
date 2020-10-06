import React, { Component } from 'react';
import './App.css';
import Personss from '../components/Persons/Persons';
import Cockpits from '../components/Cockpits/Cockpits';

class App extends Component {
  state = {
    persons: [
      { id: "sh123", name: "shazia", age: "24" },
      { id: "sh2323", name: "ali", age: "25" },
      { id: "sh23123", name: "najar", age: "26" },
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
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    // now we have to update the Array
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })

  }
  deletePersonHandler = (personIndex) => {
    //we should use slice to create copy of original array so that it will not effect the original array
    const updatedPersons = this.state.persons.slice();
    updatedPersons.splice(personIndex, 1);
    this.setState({ persons: updatedPersons })
  }
  render() {
    let Persons = null;
    if (this.state.showPersons) {
      Persons = (
        <div>
          <Personss
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );

    }
    
    return (
        <div className="App">
          <Cockpits 
           showPersons={this.state.persons}
           persons={this.state.persons}
           clicked={this.togglePersonsHandler} />
          {Persons}
        </div>
    );
  }
}

export default App;
