import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
      handleInputChanged = (event) => {
        const Value = event.target.value;
        if (Value >= 33 || Value <= 0 || !event.target.value) {
          this.setState({
            numberDefault: Value,
            infoText: 'Event Count Limit must be set between 1 - 32',
          });
        } else {
          this.setState({
            numberDefault: parseInt(Value),
            infoText: ' ',
          });
        }
    
        this.props.updateEvents('check', Value);
  };
  

    constructor() {
        super();
        this.state = {
            numberDefault: 32,
            infoText: ''
        }
    }

    render() {
        

        return (
            <div className='number-of-events'>
                <h1><ErrorAlert text={this.state.infoText} /></h1>
                <h2>Event Count Limit:</h2>
                <input type='number' className='count-number' value={this.state.numberDefault} onChange={this.handleInputChanged}></input>
            </div>
        );
    }
}

export default NumberOfEvents;