import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  // SCENARIO 1
  test("If the user hasn't specified a number, app will display 32 events by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("the user hasn't filtered the number of events", () => {
      AppComponent = render(<App />);
    });

    when('the user is shown the list of events on main page', async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    then(/^the default number of events should be (\d+)$/, () => {
      expect(eventList.length).toEqual(32);
    });
  });

  // SCENARIO 2
  test('User is able to select the amount of events they want to see.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('the user is shown default 32 events', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    when(
      'the user inputs a desired number of events they want to see',
      async () => {
        const button = AppComponent.queryByTestId('numberOfEventsInput');

        await userEvent.type(button, '{backspace}{backspace}10');
      }
    );

    then(
      'the app will display the desired number of events',
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList.length).toEqual(10);
      }
    );
  });
});