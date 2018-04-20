import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes.js';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Nav/>
        {routes}
      </div>
    );
  }
}

export default App;
