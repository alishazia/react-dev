import React from 'react';

const project = (props) => {
    return (
        <div>
            <p>Hello, I am {props.name} and i am {props.age} old</p>
            <p>{props.children}</p>
        </div>
    )
}
export default project;