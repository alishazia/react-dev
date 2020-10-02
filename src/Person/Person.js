import React from 'react';

const person = (props) =>{
    console.log(props)
return (
<div>
    <p onClick={props.click}>I am {props.name} and i am {props.age}</p>
    <p>{props.children}</p>
    <input onChange={props.changed} value={props.name}/>
</div>)
}
export default person;