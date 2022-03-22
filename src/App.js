import './App.css';
import './normalize.css';
import Router from './routes/Routes';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
  );
}
}

export default App;
