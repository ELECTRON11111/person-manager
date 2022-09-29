import React, { Component } from 'react';
import PropTypes from "prop-types"

// import Aux from "../../../hoc/Auxiliary";
import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    background-color: aquamarine;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const style = {
    "borderRadius": "5px"
}

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // static makes it available everywhere in the file
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering ...');
        
        // Remeber JSX is shorthand React.createElement()
        // So basically, it is still javaScript, with that knowledge, we can render adjacent elements i.e 
        // elements directly next to each without a parent by returning an array. The catch here is that we have 
        // to add a unique "key" to each individual list item for react to identify order and location of changes
        // with lists. 
        return ( 
            <Aux>
                {this.context.authenticated? <p>Authenticated!</p>: <p>Please login</p>}
                <p onClick={this.props.click}>
                I'm {this.props.name} and I'm {this.props.age} years old.
                </p>
                <p>{this.props.children}</p>
                <input
                    type = "text" 
                    key={this.props.key}
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={(e) => this.props.changed(e)} 
                    value = {this.props.name}
                    style = {style}
                />
            </Aux>
        )
    }
};

// We can specify the data type for the props we recieve.
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    click: PropTypes.func
};

export default withClass(Person, "Person");