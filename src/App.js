import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data.json';

class App extends Component {
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
      <Header />
      <Card restaurant={this.state.restaurant}/>
      <Button getRestaurant={this.getRestaurant} />
      <Footer />
      </div>
    )
  }
}

export default App;