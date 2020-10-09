import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import './Cockpits.css';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click();
    }, []);

    const style = {
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
            <p >{props.title}</p>
            {/* here we called the bind and passed the reference */}
            <button ref={toggleBtnRef} style={style} onClick={props.clicked}>Toggle Person</button>
            <AuthContext.Consumer>{context => <button onClick={context.login}>Login In</button>}</AuthContext.Consumer>
        </div>
    )
}

export default Cockpit;