import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


// Feature 2 (Show/hide event details)

defineFeature(feature, (test) => {

  // Scenario 1
  test('Event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the user opened the app', () => {
      AppComponent = render(<App />);
    });

    when(
      'the user sees full list of events',
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');

        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(32);
        });
      }
    );

    then('all events should collapse by default', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

  // SCENARIO 2
  test('User can click to expand event to see more details.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('the user sees full list of events', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    when('a user clicks to expand on the event details', async () => {
      const button = AppComponent.queryAllByText('Show Details')[0];

      await userEvent.click(button);
    });

    then('more details about the event should be shown', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });
  });

  // SCENARIO 3
  test('User can click to hide event details.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given('the user has clicked to show event details', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });

      button = AppComponent.queryAllByText('Show Details')[0];
      await userEvent.click(button);

      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });

    when('the user clicks on the hide button', async () => {
      await userEvent.click(button);
    });

    then('the details of that even will be hidden', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });
});