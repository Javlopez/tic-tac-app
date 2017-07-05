import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Button from 'muicss/lib/react/button';

const styles = {
    overlay: {
        backgroundColor: '#57595a'
    },
    content: {
        color: '#4a74cc',
        top: 40,
        width: '40%',
        left: 50,
        right: 50,
        margin: '20%',
        textAlign: 'center'
    },
}

export default class ModalScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: true
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal (e) {
        this.setState({ showModal: false });
        this.props.updatePlayer(e.target.textContent);
    }

    render () {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={styles}
                    contentLabel="Choose your player"
                >
                    <h3> Welcome to Tic-Tac-Toe App  </h3>
                    <div> Let start with the Game </div>
                    <h4> Please choose your player</h4>
                    <div>
                        <Button color="primary" onClick={this.handleCloseModal}>X</Button>
                        <Button color="primary" onClick={this.handleCloseModal}>O</Button>
                    </div>
                </ReactModal>
            </div>
        );
    }
}