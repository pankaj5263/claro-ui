import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers for better assertions
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    render(<Button label="Primary" variant="primary" />);
    const button = screen.getByText('Primary');
    expect(button).toHaveStyle('background: #BF4F74');
    expect(button).toHaveStyle('color: #FFFFFF');
  });

  it('triggers the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click Me" onClick={onClickMock} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders the button as disabled', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('renders the button with the correct size', () => {
    render(<Button label="Large Button" size="large" />);
    const button = screen.getByText('Large Button');
    expect(button).toHaveStyle('font-size: 1.25em');
    expect(button).toHaveStyle('padding: 0.75em 1.5em');
  });
});
