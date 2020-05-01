import React from 'react';

const teamMember = (props) => {
    return (
        <div>
             <p> My name is {props.name} and I am learning {props.course} </p>
             <input value = {props.name} onChange = {props.nameChanger}/>
             <input value = {props.course} onChange = {props.courseChanger} />
             <button onClick = {props.removeMember}>You are now certified!</button>
        </div>
    )
}

export default teamMember;