// The component can be named anyting you want for errors that you predict will occur and is out of your control

import React, {Component} from "react";

class ErrorBoundary extends Component {
    state = {
        hasError:false,
        errorMessage: ''
    }

    // Component did catch is a custom method for Errors that gives us two parameters
    // error and info
    componentDidCatch = (error, info) => {
        this.setState({hasError : true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        } else {
            //  If there's no error, show the Component its wrapped around.
            return this.props.children;
        }
        
    }
}

/**
 * this does not stop error messages from going to the console during development but it does
 * that during production.
 */

export default ErrorBoundary;