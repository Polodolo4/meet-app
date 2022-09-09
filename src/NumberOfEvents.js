import React, { Component } from 'react';

class NumberOfEvents extends Component {
      handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ numberDefault: value });
        this.props.updateEvents(null, value);
  };

    constructor() {
        super();
        this.state = {
            numberDefault:32
        }
    }

    render() {
        

        return (
            <div className='number-of-events'>
                Event Count Limit:
                <input type='number' className='count-number' value={this.state.numberDefault} onChange={this.handleInputChanged}></input>
            </div>
        );
    }
}

export default NumberOfEvents;