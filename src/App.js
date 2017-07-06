import React, { Component } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import ModalScreen from './ModalScreen';

import './App.css';

const API_SERVER_REST = 'http://localhost:8000';

const PLAYER_DEFAULT = "X";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {matrix: [], player: PLAYER_DEFAULT};
    }

    componentWillMount() {
        fetch(API_SERVER_REST + '/api/movements')
            .then((response) => {
                return response.json();
            })
            .then((movements) => {
                this.updateCurrentState(movements);
            })


    }

    updatePlayer = (player = PLAYER_DEFAULT) =>  {
        this.setState({ player: player })
    }

    updateCurrentState = (movements) => {
        this.setState({ matrix: movements })
    }

    updateBoard = (e, positions) =>  {
        let currentBoardState = this.matrixState(e, positions);


         fetch(API_SERVER_REST + '/api/movements', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
                'X-Player': this.state.player
             },
             body: JSON.stringify(currentBoardState)
         })
         .then((response) => {
            return response.json();
         })
         .then((movements) => {
            this.updateCurrentState(movements);
         })
    }

    matrixState = (e, positions) => {
        let currentState = [];
        let rowItems = [];


        for(let i = 0; i < positions.length; i++) {

            let currentItem = positions[i];
            let player = currentItem.textContent;

            if (e.target === currentItem) {
                e.target.textContent = this.state.player;
                player = this.state.player;
            }

            if(i%3 === 0 && i !== 0) {
                currentState.push(rowItems);
                rowItems = [];
            }

            rowItems.push(player);
        }

        currentState.push(rowItems);

        return currentState;
    }

  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard matrix={this.state.matrix} updateBoard={this.updateBoard}/>
          <ModalScreen updatePlayer={this.updatePlayer}/>
      </div>
    );
  }
}

export default App;
