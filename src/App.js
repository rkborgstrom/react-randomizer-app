import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';


class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Button  />
        <Footer />
      </div>
    )
  }
}

export default App;