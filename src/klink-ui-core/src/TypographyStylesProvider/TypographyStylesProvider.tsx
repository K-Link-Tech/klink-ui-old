import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@klink-ui/styles';
import { Box } from '../Box';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Render any content to add Klink UI typography styles */
  children: React.ReactNode;
}

export const TypographyStylesProvider = forwardRef<HTMLDivElement, TypographyStylesProviderProps>(
  (props, ref) => {
    const { className, unstyled, variant, ...others } = useComponentDefaultProps(
      'TypographyStylesProvider',
      {},
      props
    );

    const { classes, cx } = useStyles(null, {
      name: 'TypographyStylesProvider',
      unstyled,
      variant,
    });

    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

TypographyStylesProvider.displayName = '@klink-ui/core/TypographyStylesProvider';
