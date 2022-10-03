import React, { Component } from "react";

class Event extends Component {
  changeCollapseBoolean = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h2 className="eventName">{event.summary}</h2>
        <div className="dateTime">
          WHEN: From {event.start.dateTime} to {event.end.dateTime}
        </div>
        <div className="location">WHERE: {event.location}</div>
        <br></br>
        {!collapsed && (
          <div className="event-description">{event.description}</div>
        )}
        {this.state.collapsed ? (
          <button
            className="details-button"
            onClick={this.changeCollapseBoolean}
          >
            Show Details
          </button>
        ) : (
          <button
            className="hide-details-button"
            onClick={this.changeCollapseBoolean}
          >
            Hide Details
          </button>
        )}
      </div>
    );
  }
}
export default Event;
