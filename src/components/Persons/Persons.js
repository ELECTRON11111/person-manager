import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component{
    // updating lifecycle react hooks
    // getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate - componentDidUpdate.

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps', props);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // here you actually have to return true or false for the update to continue.
        //  so you have to check if your nextProps === nextState, to determine if there's need for updating.
        console.log('[Persons.js] shouldComponentUpdate');
        // check the person propto determine if an update re-render is necessary
        return nextProps.persons !== this.props.persons? true: false; 
    } 

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // You could do some last minute DOM manipulation, with the prevState and prevProps
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: "snapshot" };
    }
    
    // the lifecycle update hook runs before rendering update to the virtual DOM 
    componentWillUnmount() {
        // here we can do cleanup
        console.log('[App.js] componentWillUnmount');
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // runs when we're done with all the updating
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering ....');
        return this.props.persons.map((person, index) => {
        return <Person
                    name = {person.name} 
                    age = {person.age} 
                    key = {person.id}
                    // You have to create an anonymous function before passing parameters
                    click = {() => this.props.clicked(index)}
                    changed = {(e) => this.props.changed(e, person.id)}
                />
    })}
}

export default Persons;
