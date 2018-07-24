import React, { Component } from 'react';
import data from '../data.json';
import Card from './Card';

class Button extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurant: {}
        }
    }

    componentDidMount() {
        this.getRestaurant()
    }

    getRestaurant = () => {
        let random = Math.floor(Math.random() * { data }.data.length)
        let randomRestaurant = { data }.data[random]
        console.log(randomRestaurant);
        this.setState({ restaurant: randomRestaurant })
    }


    render() {
        return (
            <div>
                <Card restaurant={this.state.restaurant} />
                <button class="btn btn-info" onClick={this.getRestaurant}> Random Restaurant </button>
            </div>
        );
    }
}

export default Button;




