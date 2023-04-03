import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@klink-ui/tests';
import { RingProgress, RingProgressProps } from './RingProgress';

const defaultProps: RingProgressProps = {
  sections: [{ value: 50, color: 'blue' }],
  label: 'test',
};

describe('@klink-ui/core/RingProgress', () => {
  itSupportsProviderVariant(RingProgress, defaultProps, 'RingProgress');
  itSupportsSystemProps({
    component: RingProgress,
    props: defaultProps,
    displayName: '@klink-ui/core/RingProgress',
    refType: HTMLDivElement,
    providerName: 'RingProgress',
  });

  it('renders given amount of curves', () => {
    const { container } = render(
      <RingProgress
        sections={[
          { value: 10, color: 'blue' },
          { value: 15, color: 'error' },
          { value: 10, color: 'green' },
        ]}
      />
    );

    // 3 sections + 1 root element
    expect(container.querySelectorAll('circle')).toHaveLength(4);
  });

  it('renders given label', () => {
    render(<RingProgress {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('supports props on sections', async () => {
    const spy = jest.fn();
    const { container } = render(
      <RingProgress
        sections={[
          { value: 20, color: 'blue_light', onClick: spy },
          { value: 30, color: 'orange' },
        ]}
      />
    );

    // 0 is root section
    await userEvent.click(container.querySelectorAll('circle')[1]);
    expect(spy).toHaveBeenCalledTimes(1);
    await userEvent.click(container.querySelectorAll('.klink-ui-Progress-bar')[2]);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('displays the root in specified color', () => {
    const { container } = render(
      <RingProgress
        sections={[
          { value: 10, color: 'blue' },
          { value: 15, color: 'error' },
          { value: 10, color: 'green' },
        ]}
        rootColor="transparent"
      />
    );

    // 3 sections + 1 root element
    expect(container.querySelectorAll('circle[stroke="transparent"]')).toHaveLength(1);
  });
});
