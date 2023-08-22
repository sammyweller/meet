Feature: Specify number of events
    Scenario: If the user hasn't specified a number, app will display 32 events by default.
        Given the user hasn't filtered the number of events
        When the user is shown the list of events on main page
        Then the default number of events should be 32
    Scenario: User is able to select the amount of events they want to see.
        Given the user is shown default 32 events
        When the user inputs a desired number of events they want to see
        Then the app will display the desired number of events