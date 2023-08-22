Feature: Show and hide event details
 Scenario: Event element is collapsed by default.
  Given the user opened the app
  When the user sees full list of events
  Then all events should collapse by default
 Scenario: User can click to expand event to see more details.
  Given the user sees full list of events
  When a user clicks to expand on the event details
  Then more details about the event should be shown
 Scenario: User can click to hide event details.
  Given the user has clicked to show event details
  When the user clicks on the hide button
  Then the details of that even will be hidden