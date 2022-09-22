import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { OfflineAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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
    
    if (!navigator.onLine) {
      this.setState({
        infoText: 'No Internet Connection!! Events may not be up to date... :(',
      });
    } else {
      this.setState({ infoText: '' });
    }
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };
  

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h1><OfflineAlert text={this.state.infoText} /></h1>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <h4>Events in each city!!</h4>

        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>        
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;