import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Contact from '../Contact/Contact.js'
import Home from '../Home/Home.js'
import Portfolio from '../Portfolio/Portfolio.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="row">
            <div className="col-sm"><Link to="/">Home</Link></div>
            <div className="col-sm"><Link to="/Portfolio">Portfolio</Link></div>
            <div className="col-sm"><Link to="/Contact">Contact</Link></div>
          </div>

          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
