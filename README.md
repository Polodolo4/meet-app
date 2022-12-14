# **Project Objective**

## Key Features

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

## User Stories

1. As a user, I would like to be able to filter events by city so that I can see the list of events
   that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less
   information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the
   app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events
   I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I
   can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each
   city so that I know what events are organized in which city.

### Feature 2: Show/Hide an Event's Details.

#### Scenario 1 : An event element is collapsed by default.

Given user is on main page.
When nothing is selected.
Then the even details will be collapsed.

#### Scenario 2: User can expand an event to see its details.

Given user wants to see details about an event.
When the user clicks on the event.
Then the details for the event will expand.

#### Scenario 3: User can collapse an event to hide its details.

Given user has viewed the details and wants to now collapse.
When the user clicks on the expanded details.
Then the details will once again collapse.

### Feature 3: Specify number of Events.

#### Scenario 1: When user hasn’t specified a number, 32 is the default number.

Given the user has not specified a preferred number.
When the user visits the page.
Then 32 events are displayed by default.

#### Scenario 2: User can change the number of events they want to see.

Given the user has chosen an event count preference.
When the user goes to the page.
Then the specified count of events will display.

### Feature 4 : Use the App even when offline.

#### Scenario 1: Show cached data when there’s no internet connection.

Given the user doesn't have an internet connection.
When they go to the site.
Then the cached data can still be accessed and viewed.

#### Scenario 2: Show error when user changes the settings (city, time range).

Given the user doesn't have an internet connection.
When they attempt to change loaction settings.
Then an error is diplayed.

### Feature 5: Data Visualization.

#### Scenario 1: Show a chart with the number of upcoming events in each city.

Given user is on main page.
When they want to see upcoming events in each city.
Then the user will see a chart with the number of upcoming events.

## Tech Used

- HTML
- CSS
- JavaScript
- React
- Google Calendar API
- AWS Lambda
- Jest/Enzyme
- Jest-Cucumber
- Puppeteer

## Dependencies

```
 "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "atatus-spa": "^4.5.0",
    "axios": "^0.27.2",
    "nprogress": "^0.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "recharts": "^2.1.14",
    "web-vitals": "^2.1.4",
    "workbox-background-sync": "^6.5.4",
    "workbox-broadcast-update": "^6.5.4",
    "workbox-cacheable-response": "^6.5.4",
    "workbox-core": "^6.5.4",
    "workbox-expiration": "^6.5.4",
    "workbox-google-analytics": "^6.5.4",
    "workbox-navigation-preload": "^6.5.4",
    "workbox-precaching": "^6.5.4",
    "workbox-range-requests": "^6.5.4",
    "workbox-routing": "^6.5.4",
    "workbox-strategies": "^6.5.4",
    "workbox-streams": "^6.5.4"
```

## Dev Dependencies

```
"@wojtekmaj/enzyme-adapter-react-17": "^0.6.7",
    "enzyme": "^3.11.0",
    "gh-pages": "^4.0.0",
    "jest-cucumber": "^3.0.1",
    "puppeteer": "^17.1.3"
```
