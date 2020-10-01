import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <Person name="shazia" age="24"/>
      <Person name="ali" age="25">My Hobbies: Watching movies</Person>
      <Person name="najar" age="26"/>
    </div>
  );
}

export default App;
