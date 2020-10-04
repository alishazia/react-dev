import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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
    console.log(personIndex)
    const person = { ...this.state.persons[personIndex] };
    console.log(person)
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
    const style = {
      backgroundColor : 'green',
      color:'white',
      font : 'inherit',
      border :'1px solid blue',
      padding:'8px',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor : 'red',
        color : 'black'
      }
    }
    let Persons = null;
    if (this.state.showPersons) {
      Persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return < Person
              name={person.name} age={person.age}
              // Unique key for every list to update v dom
              key={person.id}
              click={() => { this.deletePersonHandler(index) }}
              changed={(event) => { this.nameChangedHandler(event, person.id) }}
            />
          })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] ={
        backgroundColor : 'salmon',
        color : 'black'
      }
    }
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }
    return (
      <div className="App">
        <p className={classes.join(' ')}>Hello, Lets start working in React!!</p>
        {/* here we called the bind and passed the reference */}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
        { Persons}
      </div>
    );
  }
}

export default Radium(App);
