import React, {useEffect} from "react";

const Cockpit = (props) => {
  // useEffect react hook is used to control update with functional components
  useEffect(() => {
    // This is componentDidmount and componentDidUpdate in one effect
    console.log('[App.js] useEffect');
    // we can cause side effects, make http requests
    // also useEffect can be used multiple times
  });

  useEffect(() => {
    // to make this run once after page is rendered add an [] as a sencond arg to this fn
    setTimeout(() => {
      alert('[once] got data from server');
    }, 1000);
    // This will have similar effect as component did mount
  }, [])
  
  useEffect(() => {
    // to make this run once after an update is made 
    // place the data to monitor, in the array
    setTimeout(() => {
      alert('[update] showPersons updated');
    }, 1000)
  }, [props.showPersons])

  const classes = [];
  if (props.length <= 2){
    classes.push("red");
  }
  if (props.length <= 1){
    classes.push("bold");
  }


  const btnClass = [];
  if(props.showPersons) {
    btnClass.push("personsShown");
  } else {
    btnClass.pop();
  }

  return (
      <div>
          <h1>{props.appTitle}</h1>
          <p className= {classes.join(' ')}>this is really working.</p>
          
          <button
          className= {`button ${btnClass.join('')}`}
          onClick={props.clicked}
          >Toggle Persons</button>
      </div>
  );
}

export default Cockpit;