import React from "react";

const Cockpit = (props) => {
    const classes = [];
    if (props.length <= 2){
      classes.push("red");
    }
    if (props.length <= 1){
      classes.push("bold");
    }

    if(props.showPersons) {
      document.querySelector('.button').classList.add("personsShown")
    } else {
      document.querySelector('.button').classList.remove("personsShown")
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className= {classes.join(' ')}>this is really working.</p>
            
            <button
            className='button'
            onClick={props.clicked}
            >Toggle Persons</button>
        </div>
    );
}

export default Cockpit;