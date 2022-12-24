import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const HeaderEl = screen.getByRole('heading');
  expect(HeaderEl.textContent).toBe('Test Website');
});

test("button changes color when clicked", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")

  userEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
  expect(colorBtn.textContent).toBe("Change button color to green")
})