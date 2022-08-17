import React, { Component } from 'react';

class Event extends Component {
    changeCollapseBoolean = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    constructor() {
        super();
        this.state = {
            collapsed: true
        }
    }

    render() {
        
        const { event } = this.props;
        const { collapsed } = this.state;

        return (
            <div>
                <h2 className='eventName'>{event.summary}</h2>
                <div className='dateTime'></div>
                <div className='location'></div>
                {!collapsed && <div className='event-description'>{event.description}</div>}
                {this.state.collapsed ? (
                    <button 
                    className='details-button'
                    onClick={this.changeCollapseBoolean}
                    >
                    Show Details
                    </button>
                ) : (
                    <button
                    className='details-button'
                    onClick={this.changeCollapseBoolean}
                    >
                    Hide Details
                    </button>
                )}
                
            </div>
        )
    }
}
export default Event;