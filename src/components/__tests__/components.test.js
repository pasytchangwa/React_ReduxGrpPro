/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../../App';

jest.mock('../Rockets');
jest.mock('../Navbar');
jest.mock('../Profile');

describe('Test for Navbar component', () => {
  test('Rockets navbar render', () => {
    const app = render(<App />);
    expect(app.getByText(/Rockets/)).toBeInTheDocument;
  });

  test('Missions navbar render', () => {
    const app = render(<App />);
    expect(app.getByText(/Missions/)).toBeInTheDocument;
  });

  test('Profile navbar render', () => {
    const app = render(<App />);
    expect(app.getByText(/Profile/)).toBeInTheDocument;
  });
});

describe('Rockets component', () => {
  test('Rockets title render', () => {
    const app = render(<App />);
    expect(app.getByText('Falcon 1')).toBeInTheDocument;
  });
  test('Rockets button render', () => {
    const app = render(<App />);
    expect(app.getByText(/Reserve Rocket/)).toBeInTheDocument;
  });
});

describe('Profile component', () => {
  const app = render(<App />);
  // userEvent.click(app.getByText('My Profile'));
  test('Profile title render ', () => {
    expect(app.getByText(/First mission/)).toBeInTheDocument;
  });
  test('Rockets button render', () => {
    const app = render(<App />);
    expect(app.getByText(/First Rocket/)).toBeInTheDocument;
  });
});
