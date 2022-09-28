import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user opens up the app.', () => {
            AppWrapper = mount(<App />);
        });

        when('the user sees a list of all upcoming events.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });
        
        then('the user should see each event is collapsed by default.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .event-description')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('The event list and event elements have loaded.', () => {
            AppWrapper = mount(<App />);
          });

        when('the user clicks on the show details button.', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
        });

        then('the user should see the expanded event.', () => {
            expect(AppWrapper.find('.event .event-description')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user sees an expanded event element.', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
        });

        when('the user clicks on hide the details button.', () => {
            AppWrapper.find('.hide-details-button').simulate('click');
        });

        then('the user should see the collapsed event element with the show details button.', () => {
            expect(AppWrapper.find('.event .event-description')).toHaveLength(0);
        });
    });

});