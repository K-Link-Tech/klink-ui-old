import { Carousel } from '@klink-ui/carousel';
import { MantineProvider } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import React from 'react';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@klink-ui/carousel';

function Demo() {
  return (
    <MantineProvider theme={{ dir: 'rtl' }}>
      <Carousel orientation="vertical" height={200} withIndicators sx={{ maxWidth: 320 }} mx="auto">
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </MantineProvider>
  );
}
`;

function Demo() {
  document.documentElement.dir = 'rtl';
  return (
    <MantineProvider theme={{ dir: 'rtl' }}>
      <Carousel orientation="vertical" height={200} withIndicators sx={{ maxWidth: 320 }} mx="auto">
        <Slides count={5} />
      </Carousel>
    </MantineProvider>
  );
}

export const verticalRTL: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};