import React, { Component } from 'react';

class NumberOfEvents extends Component {
    handleInputChanged = (event) => {
        this.setState({
            numberDefault: event.target.value
        });
    }

    constructor() {
        super();
        this.state = {
            numberDefault: 32
        }
    }

    render() {
        const { numberDefault } = this.state;

        return (
            <div className='number-of-events'>
                <input className='number' value={numberDefault} onChange={this.handleInputChanged}></input>
            </div>
        );
    }
}

export default NumberOfEvents;