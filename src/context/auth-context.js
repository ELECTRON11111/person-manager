import React from "react";

// setting initial values for the createContext only helps with autocompletion from the IDE, nothing else.
// If this is going to be mutated/dynamic no need for initial values.
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;