import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleButton from './ToggleButton';


test('click on the button change ', () => {
  render(<ToggleButton enableState="DONE" disableState="IDLE"/>);

  userEvent.click(screen.getByText('IDLE'));

  expect(screen.getByText('DONE')).toBeInTheDocument('DONE');

});
