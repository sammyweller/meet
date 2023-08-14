## Key Features and User Stories: 

### Filter events by city
1. 

### Show/hide event details
2. GIVEN the user has opened event details; WHEN the user clicks on "hide event details"; THEN the information about the event should close. 
-OR-
GIVEN the user hasn't opened event details; WHEN the user clicks on "show more details; THEN the information about the event should open. 

### Specify number of events
3. GIVEN the user is on the events listing page of the app; WHEN the user clicks on "filter"; THEN the user should have the ability to limit the amount of events listed. 

### Use the app when offline
4. GIVEN the user no longer has internet access; WHEN the user opens the app; THEN the user should still be able to see the events viewed when last online. 

### Add an app shortcut to home screen
5. GIVEN the user has downloaded the app; WHEN the user goes to their home screen; THEN the user should be able to click on app shortcut to open app faster. 

### Display charts visualizing event details
6. GIVEN the user has not selected a city; WHEN the user is browsing list of all cities; THEN the user should see a chart showing upcoming events in all cities. 


### Serverless functions: 
In this project, we will use servless functions to authorize the client-side app in order to retrieve event data. We will use the Google Calender API through a consumer key, a consumer secret, and an access token in order to send requested resources. By using serverless functions, we can ensure smooth and efficient handling of user requests while maintaining a secure backend infrastructure.