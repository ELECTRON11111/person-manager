import React, {useEffect, useRef} from "react";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null); // set initial value to be null
  
  // useEffect react hook is used to control update with functional components
  useEffect(() => {
    toggleBtnRef.current.click();
  },[]);
  
  useEffect(() => {
    // This is componentDidmount and componentDidUpdate in one effect
    // to make this run once after page is rendered add an [] as a sencond arg to this fn
    // we can cause side effects, make http requests
    // also useEffect can be used multiple times
    const timer = setTimeout(() => {
      alert('[once] got data from server');
    }, 1000);
    // This will have similar effect as component did mount

    return () => {
      // here we can define what cleanup code we want to run before the next re-render 
      // cleanup work is done after a component is removed.
      // clear timeout as clean up code 
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, [])
  
  useEffect(() => {
    // to make this run once after an update is made 
    // place the data to monitor, in the array
    setTimeout(() => {
      alert('[update] showPersons updated');
    }, 1000)
  }, [props.showPersons]);

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
          ref={toggleBtnRef}
          >Toggle Persons</button>
      </div>
  );
}

export default React.memo(Cockpit);