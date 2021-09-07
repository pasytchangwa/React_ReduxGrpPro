import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock('./layout/Navbar');

describe('Header component', () => {
  test('Navbar render', () => {
    const app = render(<App />);
    expect(app.getByText(/Rockets/)).toBeInTheDocument;
  });
  test('Missions button render', () => {
    const app = render(<App />);
    expect(app.getByText(/Missions/)).toBeInTheDocument;
  });

  test('My Profile render', () => {
    const app = render(<App />);
    expect(app.getByText(/My profile/)).toBeInTheDocument;
  });
});
describe('Rockets component', () => {});
describe('Profile component', () => {});
