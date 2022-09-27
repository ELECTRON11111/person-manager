import React from "react";

// So another way of using hoc (higher order components) is by defining a function that takes some arguments, like its wrapped Component and any 
// other possible parameter you need, Then return a function that returns the JSX

// This is a function that returns a component, not a component itself
// so by convection, we're to use lowerCase.
const withClass = (WrappedComponent, className) => {
    // We must pass the props we get into the WrappedComponent by spreading all key:value prop into it
    return props => (
        <div className= {className}>
            <WrappedComponent {...props} />
        </div>
    )
};

export default withClass;