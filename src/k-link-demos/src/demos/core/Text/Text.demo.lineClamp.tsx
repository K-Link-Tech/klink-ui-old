import React from 'react';
import { MantineDemo } from '@k-link/ds';
import { TypographyStylesProvider, Text } from '@k-link/core';

const code = `
import { TypographyStylesProvider, Text } from '@k-link/core';

function Demo() {
  return (
    <Text lineClamp={3}>
      <TypographyStylesProvider>
        <h3>Line clamp with TypographyStylesProvider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </TypographyStylesProvider>
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text lineClamp={3}>
      <TypographyStylesProvider>
        <h3 style={{ marginTop: 0 }}>Line clamp with TypographyStylesProvider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </TypographyStylesProvider>
    </Text>
  );
}

export const lineClamp: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};