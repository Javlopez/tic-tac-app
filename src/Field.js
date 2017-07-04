import React, {Component} from 'react';
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
        this.setState({player: "Y"});
    }

    render() {
        return (<button className="field" onClick={this.updateField}>{this.state.player}</button>);
    }
}