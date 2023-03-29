import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@klink-ui/tests';
import { Text } from '../Text/Text';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const defaultProps: BreadcrumbsProps = {
  children: [
    { title: 'Klink UI', href: '#' },
    { title: 'Klink UI hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item) => (
    <Text<'a'> variant="link" component="a" href={item.href} key={item.title}>
      {item.title}
    </Text>
  )),
};

describe('@klink-ui/core/Breadcrumbs', () => {
  itSupportsProviderVariant(Breadcrumbs, defaultProps, 'Breadcrumbs');
  itSupportsSystemProps({
    component: Breadcrumbs,
    props: defaultProps,
    displayName: '@klink-ui/core/Breadcrumbs',
    refType: HTMLDivElement,
    providerName: 'Breadcrumbs',
  });

  it('renders correct amount of children and separators', () => {
    const { container } = render(<Breadcrumbs {...defaultProps} />);
    expect(container.querySelectorAll('.klink-ui-Breadcrumbs-breadcrumb')).toHaveLength(3);
    expect(container.querySelectorAll('.klink-ui-Breadcrumbs-separator')).toHaveLength(2);
  });

  it('accepts separator from props', () => {
    render(<Breadcrumbs separator="test-separator" {...defaultProps} />);
    expect(screen.getAllByText('test-separator')).toHaveLength(2);
  });

  it('arrows to set child className', () => {
    render(
      <Breadcrumbs>
        <button type="button" className="test-class">
          test-label
        </button>
      </Breadcrumbs>
    );

    expect(screen.getByRole('button')).toHaveClass('test-class');
  });
});