import React from "react";

const Cockpit = (props) => {
    const classes = [];
    if (props.length <= 2){
      classes.push("red");
    }
    if (props.length <= 1){
      classes.push("bold");
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