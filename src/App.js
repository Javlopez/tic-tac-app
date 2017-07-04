import React, { Component } from 'react';
import Header from './Header';
import Dashboard from './Dashboards';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.initDashboard();
  }

  initDashboard() {
    let init_dashboard = [
        "X","X", "X",
        "O","X", "X",
        "O"," ", "X"
    ];
    return {
        init_dashboard
    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard init_dashboard={this.state.init_dashboard}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
