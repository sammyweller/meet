//test to ensure NumberofEvents component contains an element with the role of textbox
//test to ensure default valuse of input field is 32 
// component’s textbox has a value that changes accordingly when a user .type()s in it

import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';

describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test('test to ensure component contains element with role of textbox', () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('test to ensure default number of events is 32', () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toHaveValue('32');
  });

  test('test to ensure textbox has a value that changes accordingly', async () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    await userEvent.type(input, '{backspace}{backspace}10');
    expect(input).toHaveValue('10');
  });
});