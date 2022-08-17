import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper, event;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={event} />);
    });
  
    test('render event name', () => {
      expect(EventWrapper.find('.eventName')).toHaveLength(1);
    })

    test('render event date/time', () => {
        expect(EventWrapper.find('.dateTime')).toHaveLength(1);
      })

    test('render event location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
      })

    test('render details button', () => {
        expect(EventWrapper.find('.details-button')).toHaveLength(1)
    })  

    test('render event info collapsed by default', () => {
        expect(EventWrapper.state('collapsed')).toBe(true)
    })  

    test('event renders name properly', () => {
        expect(EventWrapper.find('.eventName').text()).toBe(event.summary);
    })  

    test('event show/hide details functions properly', () => {
        expect(EventWrapper.find('.event-description')).toHaveLength(0);
        EventWrapper.setState({ collapsed: false });
        expect(EventWrapper.find('.event-description').text()).toContain(event.description);
    });
  
    test('expand details when hidden by clicking button', () => {
        EventWrapper.setState({ collapsed : true });
        EventWrapper.find('.details-button').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
      });

      test('collapse details when expanded by clicking button', () => {
        EventWrapper.setState({ collapsed : false });
        EventWrapper.find('.details-button').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
      });

  }) 
