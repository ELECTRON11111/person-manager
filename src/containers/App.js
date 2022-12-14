import React, {Component} from 'react';

import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from "../hoc/Auxiliary";
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

// One way to create a component
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    // you could also initialize your state here 
    // this.state = {data: "person"} 
  }

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
    showPersons: false,
    showCockpit: true,
    changeCounter:0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    // here you should return your updated state
    return state;
  }

  // After rendering all components, componentDidMount runs 
  // We can cause side effects in this function i.e make http requests
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  /**
   * ===================================================================================
   *  Lifecycle Hooks for state changes or Update
   * ___________________________________________________________________________________
   */

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate() {
    // Here you can also make HTTP requests and fetch data from servers.
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (e, id) => {
    // console.log(e, id);
    // Remember to always work with copies of the arrays/objects you use, ensuring state immutability
    const persons = [...this.state.persons];
    console.log(id, e.target.value);
    const Person = persons.find(person => person.id === id );
    Person.name = e.target.value;

    // When you want to set a state thta depends on the old state, you don't just do it
    // by passing this.state into it because setState is syncronous so the state you get 
    // might not necessarily be the old state but rather a state that might have been updated by another setState call
    // so we don't do it like this:
    //    this.setState({
    //        persons: persons,
    //        changeCounter: this.state.changeCounter + 1
    //    });
    // instead: the setState takes a function that gives it access to the prevState and props

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render(){
    console.log('[App.js] rendering ...');

    let persons = null;
  
    if (this.state.showPersons) {
      persons =  (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}
        />
      );
      
    }

    return (
      // Also every tag you want to use would be nested in one div per component 
      <Aux>
        <button onClick = {() => {
          this.setState({showCockpit: false});
        }}>
          Remove Cockpit
        </button>
        
        {/* Wrap what should have access to your context with theContext.Provider and set value property*/}
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit? <Cockpit 
            showPersons = {this.state.showPersons}
            appTitle = {this.props.title}
            length = {this.state.persons.length}
            clicked = {this.togglePersonsHandler}
          />: null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    )
  }
}

// Remember withClass is not a component but rather a function that returns a component 
// so we call that function on App to add a div with class and App as its child
export default withClass(App, "App");