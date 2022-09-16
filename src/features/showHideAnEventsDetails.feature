Feature: Show/hide event details

Scenario: An event element is collapsed by default.
Given the user opens up the app.
When the user sees a list of all upcoming events.
Then the user should see each event is collapsed by default.

Scenario: User can expand an event to see its details.
Given The event list and event elements have loaded.
When the user clicks on the show details button.
Then the user should see the expanded event.

Scenario: User can collapse an event to hide its details.
Given the user sees an expanded event element.
When the user clicks on hide the details button.
Then the user should see the collapsed event element with the show details button.