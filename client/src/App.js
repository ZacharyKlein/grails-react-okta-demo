import React, { Component } from 'react';
import logo from './images/logo.svg';
import 'whatwg-fetch';
import BeerList from "./BeerList";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/good-beers')
      .then(response => response.json())
      .then(data => this.setState({beers: data, isLoading: false}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <BeerList/>
      </div>
    );
  }
}

export default App;
