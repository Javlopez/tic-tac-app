import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Field.css';

export default class Field extends Component {

    constructor(props) {
        super(props);
        this.state = {player: this.props.player}
    }

    updateField = (e) => {
        if(e.target.textContent === "O" || e.target.textContent === "X") {
            return false;
        }
        this.setState({player: "X"});

        let positions = ReactDOM.findDOMNode(this).parentElement.getElementsByClassName('field');

        this.props.updateBoard(e, positions);
    }

    render() {
        return (<div className="field" ref="field" onClick={this.updateField}>{this.props.player}</div>);
    }
}