import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { RingProgress, Group, Text } from '@klink-ui/core';

const code = `
import { RingProgress, Text } from '@klink-ui/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" align="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'blue_light' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'pink' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        label={
          <Text size="xs" align="center">
            Application data usage
          </Text>
        }
        sections={[
          { value: 40, color: 'blue_light' },
          { value: 15, color: 'orange' },
          { value: 15, color: 'pink' },
        ]}
      />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
