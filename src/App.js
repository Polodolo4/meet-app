import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: "all"
  }

  updateEvents = (location, eventCount) => {
    if (!eventCount) {
      eventCount = this.state.numberOfEvents;
    } else {
      eventCount = parseInt(eventCount);
      this.setState({ numberOfEvents: eventCount });
    }

    if (!location) {
      location = 'all';
    }

    getEvents().then((events) => {
      let locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      this.setState({ events: locationEvents.slice(0, eventCount) });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        let sliceCount = this.state.numberOfEvents
        this.setState({ events: events.slice(0, sliceCount), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;