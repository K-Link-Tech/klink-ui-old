import React from 'react';
import { Grid } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@klink-ui/core';

function Demo() {
  return (
    <Grid>
      <Col span="content">fit content</Col>
      <Col span={6}>2</Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span="content">fit content</Col>
      <Col span={6}>2</Col>
    </Grid>
  );
}

export const content: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};