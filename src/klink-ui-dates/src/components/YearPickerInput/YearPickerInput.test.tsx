import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsFocusEvents,
  itSupportsProviderSize,
  itSupportsProviderVariant,
  itSupportsSystemProps,
} from '@klink-ui/tests';
import {
  itSupportsClearableProps,
  itSupportsYearsListProps,
  itSupportsDateInputProps,
  expectValue,
} from '../../tests';
import { YearPickerInput } from './YearPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

describe('@klink-ui/dates/YearPickerInput', () => {
  itSupportsSystemProps({
    component: YearPickerInput,
    props: defaultProps,
    refType: HTMLButtonElement,
    providerName: 'YearPickerInput',
    othersSelector: '.klink-ui-YearPickerInput-input',
    displayName: '@klink-ui/dates/YearPickerInput',
  });

  itSupportsFocusEvents(YearPickerInput, defaultProps, '.klink-ui-YearPickerInput-input');
  itSupportsProviderVariant(YearPickerInput, defaultProps, 'YearPickerInput', ['root', 'input']);
  itSupportsProviderSize(YearPickerInput, defaultProps, 'YearPickerInput', ['root', 'input']);
  itSupportsDateInputProps(YearPickerInput, defaultProps);
  itSupportsClearableProps(YearPickerInput, { ...defaultProps, defaultValue: new Date() });
  itSupportsYearsListProps(YearPickerInput, {
    ...defaultProps,
    defaultValue: new Date(),
    popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <YearPickerInput {...defaultProps} valueFormat="YY" value={new Date(2022, 3, 11)} />
    );
    expectValue(container, '22');

    rerender(
      <YearPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="YY"
        value={[new Date(2022, 3, 11), new Date(2024, 3, 11)]}
      />
    );
    expectValue(container, '22, 24');

    rerender(
      <YearPickerInput
        {...defaultProps}
        type="range"
        valueFormat="YY"
        value={[new Date(2022, 3, 11), new Date(2024, 3, 11)]}
      />
    );
    expectValue(container, '22 – 24');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <YearPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.firstChild).toHaveClass('klink-ui-YearPickerInput-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'klink-ui-YearPickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass(
      'klink-ui-YearPickerInput-pickerControl'
    );
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <YearPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
        classNames={{
          root: 'test-root',
          input: 'test-input',
          pickerControl: 'test-control',
        }}
      />
    );
    expect(container.firstChild).toHaveClass('test-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass('test-input');
    expect(container.querySelector('table button')).toHaveClass('test-control');
  });

  it('supports styles api (styles)', () => {
    const { container } = render(
      <YearPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
        styles={{
          root: { borderColor: '#CCEE45' },
          input: { borderColor: '#EB4522' },
          pickerControl: { borderColor: '#EE4533' },
        }}
      />
    );
    expect(container.firstChild).toHaveStyle({ borderColor: '#CCEE45' });
    expect(container.querySelector('[data-dates-input]')).toHaveStyle({ borderColor: '#EB4522' });
    expect(container.querySelector('table button')).toHaveStyle({ borderColor: '#EE4533' });
  });
});
