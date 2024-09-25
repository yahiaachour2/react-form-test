import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Basic scenario', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact Form/i);
  expect(linkElement).toBeInTheDocument();

  // check that the submit button is disabled
  const submitButton = screen.getByRole('button', { name: /Submit/i });
  expect(submitButton).toBeDisabled();
  // fill the email
  const emailInput = screen.getByLabelText(/Email/i);
  fireEvent.change(emailInput, { target: { value: 'john.doe@dnext.io' } });
  const termsCheckbox = screen.getByLabelText(/I agree to/i);
  fireEvent.click(termsCheckbox);
  // check that the submit button is enabled
  expect(submitButton).toBeEnabled();
});
