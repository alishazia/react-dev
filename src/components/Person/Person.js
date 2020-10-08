import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }
    render() {
        return (
            <div className="Person" >
                <p onClick={this.props.click}>I am {this.props.name} and i am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}
                    ref={(inputEl) => { this.inputElement = inputEl }} />
            </div>)
    }
}
export default Person;