import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateAppFeatureForm from './CreateAppFeatureForm';

describe('CreateAppFeatureForm', () => {
  test('renders CreateAppFeatureForm component', () => {
    render(<CreateAppFeatureForm />);
    expect(screen.getByText(/CREATE APP & FEATURE/i)).toBeInTheDocument();
  });

  test('allows the user to select an app', () => {
    render(<CreateAppFeatureForm />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'NEW' } });
    expect(screen.getByRole('combobox')).toHaveValue('NEW');
  });

  test('allows the user to enter an app name', () => {
    render(<CreateAppFeatureForm />);
    fireEvent.change(screen.getByPlaceholderText(/Placeholder/i), { target: { value: 'My App' } });
    expect(screen.getByPlaceholderText(/Placeholder/i)).toHaveValue('My App');
  });

  test('allows the user to enter a feature name', () => {
    render(<CreateAppFeatureForm />);
    fireEvent.change(screen.getAllByPlaceholderText(/Placeholder/i)[1], { target: { value: 'New Feature' } });
    expect(screen.getAllByPlaceholderText(/Placeholder/i)[1]).toHaveValue('New Feature');
  });

  test('has a cancel button that can be clicked', () => {
    render(<CreateAppFeatureForm />);
    fireEvent.click(screen.getByText(/Cancel/i));
    // Add assertion if there's a specific behavior expected when cancel is clicked
  });

  test('has a save button that can be clicked', () => {
    render(<CreateAppFeatureForm />);
    fireEvent.click(screen.getByText(/SAVE APP & FEATURE/i));
    // Add assertion if there's a specific behavior expected when save is clicked
  });

  // Add more tests here as needed
});