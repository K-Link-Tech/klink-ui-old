import { createStyles } from '@klink-ui/core';

export default createStyles(() => ({
  placeholder: {},

  input: {
    cursor: 'pointer',
    lineHeight: 'unset',

    '&[data-read-only]': {
      cursor: 'default',
    },
  },
}));