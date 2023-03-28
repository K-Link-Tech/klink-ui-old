import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  itSupportsInputProps,
  itIsPolymorphic,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { InputBase, InputBaseProps } from './InputBase';

const defaultProps: InputBaseProps = {
  label: 'test-label',
};

describe('@klink-ui/core/Input', () => {
  checkAccessibility([<InputBase label="test-input" />, <InputBase aria-label="test-input" />]);
  itSupportsInputProps(InputBase, defaultProps, 'InputBase');
  itSupportsFocusEvents(InputBase, defaultProps, 'input');
  itSupportsProviderVariant(InputBase, defaultProps, 'InputBase', ['root', 'input', 'label']);
  itSupportsProviderSize(InputBase, defaultProps, 'InputBase', ['root', 'input', 'label']);
  itIsPolymorphic(InputBase, defaultProps, '.klink-ui-InputBase-input');
  itSupportsSystemProps({
    component: InputBase,
    props: defaultProps,
    displayName: '@klink-ui/core/InputBase',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'InputBase',
  });
});
