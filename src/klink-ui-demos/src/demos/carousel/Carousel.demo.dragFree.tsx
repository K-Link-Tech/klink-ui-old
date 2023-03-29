import React from 'react';
import { Carousel } from '@klink-ui/carousel';
import { MantineDemo } from '@klink-ui/ds';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@klink-ui/carousel';

function Demo() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      height={200}
      dragFree
      slideGap="md"
      align="start"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel maw={320} mx="auto" withIndicators height={200} dragFree slideGap="md" align="start">
      <Slides count={5} />
    </Carousel>
  );
}

export const dragFree: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};