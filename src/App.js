import React, { useState } from 'react';
import './App.css';
import TeamMember from  './components/TeamMember';

function App() {

  const [teamState, setTeamState] = useState([
    {name: 'Brannan', course: 'Terminations'},
    {name: 'Archana', course: 'React'},
    {name: 'Niki', course: 'Maths'},
    {name: 'xx', course : 'xx'}
  ]);


  const [visible, setVisible] = useState(true);

  const teamsToDisplay = teamState.map((person, pos) => {
    return <TeamMember 
    name = {person.name} 
    course = {person.course} 
    nameChanger = {(event) => entityChangedHandler(pos, event,'name')}
    courseChanger = {(event) => entityChangedHandler(pos, event, 'course')}
    removeMember = {() => removeTeamMember(pos)}
    >
    </TeamMember>
  })

  
 

  const nameChangedHandler = (pos, event) => {
    const [...newTeam] = teamState;
    newTeam[pos].name = event.target.value;
    setTeamState(newTeam);
  }

  const courseChangedHandler = (pos, event) => {
    const [...newTeam] = teamState;
    newTeam[pos].course = event.target.value;
    setTeamState(newTeam);
  }

  const entityChangedHandler = (pos, event, property) => {
    const [...newTeam] = teamState;
    newTeam[pos][property] = event.target.value;
    setTeamState(newTeam);
  }

  const addNewMember = () => {
    const[...newTeam] = teamState;
    newTeam.push({
      name : 'xx',
      course : 'yy'
    })
    setTeamState(newTeam);
  }


  const removeTeamMember = (pos) => {
    const [...newTeam] = teamState;
    newTeam.splice(pos,1);
    setTeamState(newTeam);
  }

  const showAndHide = () => {
    setVisible(!visible)
  }


  let displayedElement = null;

  if(visible) {
    displayedElement = 
    <div>
        {teamsToDisplay}
        <button onClick = {addNewMember} >Add New Team Member   !!! </button>
    </div>
  }

 

  return (
    <div className="App">
        <h1>Team Manager!</h1>
        <button onClick = {showAndHide}> {visible ? 'Hide' : 'Show'}</button>
        {displayedElement}
      
    </div>
  );
}

export default App;