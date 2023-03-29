import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Autocomplete } from '@klink-ui/core';

const code = `
import { Autocomplete } from '@klink-ui/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'Rick', group: 'Used to be a pickle' },
        { value: 'Morty', group: 'Never was a pickle' },
        { value: 'Beth', group: 'Never was a pickle' },
        { value: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'Rick', group: 'Used to be a pickle' },
        { value: 'Morty', group: 'Never was a pickle' },
        { value: 'Beth', group: 'Never was a pickle' },
        { value: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}

export const group: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};