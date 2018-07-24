import React, { Component } from 'react';


class Button extends Component {


    render() {
        return (
            <button onClick={this.props.getRestaurant}> Random Restaurant </button>
        );
    }
}

export default Button;




