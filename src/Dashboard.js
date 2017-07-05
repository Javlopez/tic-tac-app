import React, { Component } from 'react';
import Field from './Field.js';
import './dashboard.css';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {matrix: this.props.matrix};
    }

    render(){

        return (
            <div className="dashboard">
                {
                   this.props.matrix.map(
                        (field) =>
                            field.map((player) => <Field player={player} updateBoard={this.props.updateBoard}/>)
                    )
                }
            </div>
        );
    }
}
