import { MantineDemo } from '@klink-ui/ds';
import { SegmentedControlWrapper } from './Wrapper';

const codeTemplate = (props: string) => `
import { SegmentedControl } from '@klink-ui/core';

function Demo() {
  return <SegmentedControl${props} />;
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: SegmentedControlWrapper,
  codeTemplate,
  configurator: [{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: null }],
};