import React from 'react';
import styled from 'styled-components';
import './Person.css'

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

const person = (props) => {
    // To write dynamic javascript in JSX we use {}
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            
            {/* You can also take the value inputed between the <person></person> tags with props.children property */}

            <p>{props.children}</p>
            {/* I set up two way binding here, it means I specifically set the value of an elem and make provision for changes */}

            <input  
                type = "text" 
                onChange={(e) => props.changed(e)} 
                value = {props.name}
                style = {style}
            />

        </StyledDiv>
    )

};

/**
 * For components created with classes, the props are accessed using 'this.props'
 */
export default person;