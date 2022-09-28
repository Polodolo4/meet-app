import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('The app has loaded.', () => {
        });

        let AppWrapper;
        when('The user has not chosen a number of events in the event count limit input box.', () => {
            AppWrapper = mount(<App />);
        });

        then('A default number of 32 events is loaded on the page.', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toEqual(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('The app has loaded.', () => {
            AppWrapper = mount(<App />);
        });

        when('User changes the number of events in the event count limit input box.', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 4 } };
            NumberOfEventsWrapper.find('.count-number').simulate('change', eventObject);
        });

        then('The event list elements shows the number of events set by the user, rather than default.', () => {
            expect(AppWrapper.state('numberOfEvents')).toBe(4);
        });
    });

});