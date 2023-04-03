import React from 'react';
import { useFocusWithin } from './use-focus-within';

export default { title: 'use-focus-within' };

export const Usage = () => {
  const { ref, focused } = useFocusWithin();
  return (
    <div ref={ref} style={{ background: focused ? 'error' : 'transparent' }}>
      <input />
      <button type="button">Button</button>
      <input />
      <a href="https://klink-ui.dev/">Link</a>
    </div>
  );
};
