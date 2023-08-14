import { render } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from "@testing-library/user-event"; 
import mockData from '../mock-data';

const mockEvent = mockData[0];

describe('<Event /> Component', () => {
  let EventComponent;

  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  test('renders event title', () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  test('renders event time', () => {
    const time = EventComponent.queryByText(mockEvent.created);
    expect(time).toBeInTheDocument();
  });

  test('renders event location', () => {
    const location = EventComponent.queryByText(mockEvent.location);
    expect(location).toBeInTheDocument();
  });

  test('renders "show details" button', () => {
    const button = EventComponent.queryByText('Show Details');
    expect(button).toBeInTheDocument();
  });

  test('by default, event details section should be hidden', () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test('show the details section when the user clicks the "show details" button', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  test('hide the details section when the user clicks "hide details" button', async () => {
    const button = EventComponent.queryByText('Show Details');
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText('Hide Details');
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

});
