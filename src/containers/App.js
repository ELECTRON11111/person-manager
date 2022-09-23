import React, {Component} from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons'

// One way to create a component
class App extends Component {
  state = {
    persons : [
      {
        name: "dan", 
        age : 19,
        id: "hquwg712"
      },
      {
        name: "idana",
        age: 22,
        id: "hdekqhii3i"
      },
      {
        name: "human",
        age: 19,
        id: "djkweu238"
      }
    ],
    otherState: "some stuff",
    showPersons: false
  };

  nameChangedHandler = (e, id) => {
    // console.log(e, id);
    // Remember to always work with copies of the arrays/objects you use, ensuring state immutability
    const persons = [...this.state.persons];
    console.log(id, e.target.value);
    const Person = persons.find(person => person.id === id );
    Person.name = e.target.value;
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    // This decides to display the persons or not
    const doesShow = this.state.showPersons? false : true; 
    this.setState({
      showPersons: doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // With React, we should always ensure state immutability
    // Meaning we shouldn't change state values without setting state instead we create a copy
    // and make changes to the copy before updating the state with that copy 
    const persons = [...this.state.persons];
    // Delete one item from the person index
    persons.splice(personIndex, 1);
    // update the state
    this.setState( {persons: persons} );
  }

  render(){
    let persons = null;
  
    if (this.state.showPersons) {
      persons =  (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
        />
      );
      
    }

    return (
      // Also every tag you want to use would be nested in one div per component 
      <div className="App">
        <Cockpit 
          appTitle = {this.props.title}
          length = {this.state.persons.length}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
  }
};

export default App;