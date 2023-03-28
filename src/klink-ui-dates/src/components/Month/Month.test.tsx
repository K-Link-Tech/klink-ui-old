import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import {
  itSupportsMonthProps,
  itSupportsGetDayRef,
  itSupportsOnDayKeydown,
  itSupportsOnDayClick,
} from '../../tests';
import { Month, MonthProps } from './Month';

const defaultProps: MonthProps = {
  month: new Date(2022, 3, 2),
};

describe('@klink-ui/core/Month', () => {
  itSupportsSystemProps({
    component: Month,
    props: defaultProps,
    refType: HTMLTableElement,
    providerName: 'Month',
    displayName: '@klink-ui/dates/Month',
  });

  itSupportsProviderVariant(Month, defaultProps, 'Month', ['month', 'day', 'weekdaysRow']);
  itSupportsProviderSize(Month, defaultProps, 'Month', ['month', 'day', 'weekdaysRow']);
  itSupportsMonthProps(Month, defaultProps);
  itSupportsGetDayRef(Month, defaultProps);
  itSupportsOnDayKeydown(Month, defaultProps);
  itSupportsOnDayClick(Month, defaultProps);

  it('has correct default __staticSelector', () => {
    const { container } = render(<Month {...defaultProps} />);
    expect(container.querySelector('table')).toHaveClass('klink-ui-Month-month');
    expect(container.querySelector('thead tr')).toHaveClass('klink-ui-Month-weekdaysRow');
    expect(container.querySelector('tbody tr td button')).toHaveClass('klink-ui-Month-day');
  });

  it('supports __staticSelector', () => {
    const { container } = render(<Month {...defaultProps} __staticSelector="Calendar" />);
    expect(container.querySelector('table')).toHaveClass('klink-ui-Calendar-month');
    expect(container.querySelector('thead tr')).toHaveClass('klink-ui-Calendar-weekdaysRow');
    expect(container.querySelector('tbody tr td button')).toHaveClass('klink-ui-Calendar-day');
  });

  it('supports styles api (styles)', () => {
    const { container } = render(
      <Month
        {...defaultProps}
        styles={{
          day: { borderColor: '#CECECE' },
          month: { borderColor: '#EFC65E' },
          weekdaysRow: { borderColor: '#FF4534' },
        }}
      />
    );
    expect(container.querySelector('table')).toHaveStyle({ borderColor: '#EFC65E' });
    expect(container.querySelector('thead tr')).toHaveStyle({ borderColor: '#FF4534' });
    expect(container.querySelector('tbody tr td button')).toHaveStyle({ borderColor: '#CECECE' });
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <Month
        {...defaultProps}
        classNames={{
          day: 'test-day',
          month: 'test-month',
          weekdaysRow: 'test-weekdays',
        }}
      />
    );
    expect(container.querySelector('table')).toHaveClass('test-month');
    expect(container.querySelector('thead tr')).toHaveClass('test-weekdays');
    expect(container.querySelector('tbody tr td button')).toHaveClass('test-day');
  });

  it('supports static prop', () => {
    const { container, rerender } = render(<Month {...defaultProps} />);
    expect((container.querySelector('td').firstChild as HTMLElement).tagName).toBe('BUTTON');

    rerender(<Month {...defaultProps} static />);
    expect((container.querySelector('td').firstChild as HTMLElement).tagName).toBe('DIV');
  });
});
