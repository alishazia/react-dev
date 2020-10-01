import React from 'react';

const project = (props) =>{
return (
<div>
    <h3>I am {props.name} and i am {props.age}</h3>
    <h3>{props.children}</h3>
</div>)
}
export default project;