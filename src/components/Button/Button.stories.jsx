import { action } from '@storybook/addon-actions';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
};

// Primary Button Story
export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    onClick: action('primary-button-click'),
  },
};

// Secondary Button Story
export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    onClick: action('secondary-button-click'),
  },
};

// Large Button Story
export const Large = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
    onClick: action('large-button-click'),
  },
};

// Small Button Story
export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
    onClick: action('small-button-click'),
  },
};
