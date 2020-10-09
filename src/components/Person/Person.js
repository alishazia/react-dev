import React, { Component } from 'react';
import AuthContext from '../../context/auth-context';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <div className="Person" >
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? "Authenticated!" : "Please Log In"}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name} and i am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElementRef} />
            </div>
        )
    }
}
export default Person;