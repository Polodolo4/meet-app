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
            numberDefault: 4
        }
    }

    render() {
        const { numberDefault } = this.state;

        return (
            <div className='number-of-events'>
                Event Count Limit:
                <input className='number' value={numberDefault} onChange={this.handleInputChanged}></input>
            </div>
        );
    }
}

export default NumberOfEvents;