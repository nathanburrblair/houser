import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import router from './router.js';
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
    
        <Header />
        {router}
      </div>
    );
  }
}

export default App;
