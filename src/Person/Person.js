import React from 'react';

const person = (props) =>{
    console.log(props)
return (
<div>
    <p>I am {props.name} and i am {props.age}</p>
    <p>{props.children}</p>
</div>)
}
export default person;