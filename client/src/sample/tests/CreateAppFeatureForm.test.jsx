import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateAppFeatureForm from './CreateAppFeatureForm';

describe('CreateAppFeatureForm', () => {
  test('renders the form with all required fields and buttons', () => {
    render(<CreateAppFeatureForm />);
    expect(screen.getByText(/create app & feature/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select app \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/app name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/feature name \*/i)).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/save app & feature/i)).toBeInTheDocument();
  });

  test('allows entering text in the APP NAME input', () => {
    render(<CreateAppFeatureForm />);
    const appNameInput = screen.getByLabelText(/app name \*/i);
    fireEvent.change(appNameInput, { target: { value: 'Test App' } });
    expect(appNameInput.value).toBe('Test App');
  });

  test('allows entering text in the FEATURE NAME input', () => {
    render(<CreateAppFeatureForm />);
    const featureNameInput = screen.getByLabelText(/feature name \*/i);
    fireEvent.change(featureNameInput, { target: { value: 'Test Feature' } });
    expect(featureNameInput.value).toBe('Test Feature');
  });

  // Add more tests here to cover different scenarios, such as:
  // - Selecting an option from the SELECT APP dropdown
  // - Clicking the Cancel button
  // - Clicking the SAVE APP & FEATURE button
  // - Form submission behavior
  // - Validation checks for required fields
  // - Any conditional rendering or dynamic behavior
});