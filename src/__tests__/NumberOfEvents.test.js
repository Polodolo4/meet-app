import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render number', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
    });
    
    test('when not specified by user, render 32 by default in box', () => {
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(32);
    });

    test('event count is 32 by default', () => {
        expect(NumberOfEventsWrapper.state('numberDefault')).toBe(32);
    });

    test('change state when default number changes', () => {
        const eventObject = { target: { value: 4 } };
        NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberDefault')).toBe(4);
    });

});