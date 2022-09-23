import React from "react";
import Person from "./Person/Person";

const Persons = (props) => props.persons.map((person, index) => {
    return <Person
                name = {person.name} 
                age = {person.age} 
                key = {person.id}
                // You have to create an anonymous function before passing parameters
                click = {() => props.clicked(index)}
                changed = {(e) => props.changed(e, person.id)}
            />
})

export default Persons;
