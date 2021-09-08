/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../../App';

jest.mock('../Rockets');
jest.mock('../Profile');
jest.mock('../Missions');

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
