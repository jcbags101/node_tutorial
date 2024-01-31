// AppFeatureForm.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppFeatureForm from './AppFeatureForm';

describe('AppFeatureForm', () => {
  test('renders AppFeatureForm component', () => {
    render(<AppFeatureForm />);
    expect(screen.getByText(/CREATE APP & FEATURE/i)).toBeInTheDocument();
  });

  test('allows the user to select an app', () => {
    render(<AppFeatureForm />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'NEW' } });
    expect(screen.getByRole('combobox')).toHaveValue('NEW');
  });

  test('allows the user to enter an app name', () => {
    render(<AppFeatureForm />);
    fireEvent.change(screen.getByPlaceholderText('Placeholder'), { target: { value: 'Test App' } });
    expect(screen.getByPlaceholderText('Placeholder')).toHaveValue('Test App');
  });

  test('allows the user to enter a feature name', () => {
    render(<AppFeatureForm />);
    fireEvent.change(screen.getAllByPlaceholderText('Placeholder')[1], { target: { value: 'Test Feature' } });
    expect(screen.getAllByPlaceholderText('Placeholder')[1]).toHaveValue('Test Feature');
  });

  test('has a cancel button that can be clicked', () => {
    render(<AppFeatureForm />);
    fireEvent.click(screen.getByText(/Cancel/i));
    // Add assertion for what should happen when cancel is clicked
  });

  test('has a save button that can be clicked', () => {
    render(<AppFeatureForm />);
    fireEvent.click(screen.getByText(/SAVE APP & FEATURE/i));
    // Add assertion for what should happen when save is clicked
  });

  // Add more tests for validation, submission, and edge cases
});