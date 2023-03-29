import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@klink-ui/styles';
import { createPolymorphicComponent } from '@klink-ui/utils';
import { Box } from '../Box';
import useStyles from './Center.styles';

export interface CenterProps extends DefaultProps {
  variant?: string;

  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export const _Center = forwardRef<HTMLDivElement, CenterProps>((props, ref) => {
  const { inline, className, unstyled, variant, ...others } = useComponentDefaultProps(
    'Center',
    {},
    props
  );
  const { classes, cx } = useStyles({ inline }, { name: 'Center', unstyled, variant });
  return <Box ref={ref} className={cx(classes.root, className)} {...others} />;
});

_Center.displayName = '@klink-ui/core/Center';

export const Center = createPolymorphicComponent<'div', CenterProps>(_Center);