import React from 'react';
import './Cockpits.css';

const cockpit = (props) => {
    let style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'red',
            color: 'black'
        }
    }
    if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red')
    }
    if (props.persons.length <= 1) {
        classes.push('bold')
    }
    return (
        <div>
            <p className={classes.join(' ')}>Hello, Lets start working in React!!</p>
            {/* here we called the bind and passed the reference */}
            <button style={style} onClick={props.clicked}>Toggle Person</button>
        </div>
    )
}

export default cockpit;