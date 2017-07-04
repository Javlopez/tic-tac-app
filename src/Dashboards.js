import React, { Component } from 'react';
import Field from './Field.js';
import './dashboard.css';

export default class Dashboard extends Component {

    render(){

        return (
            <div className="dashboard">
                {
                    this.props.init_dashboard.map((field) => <Field player={field}/>)
                }
            </div>
        );
    }
}