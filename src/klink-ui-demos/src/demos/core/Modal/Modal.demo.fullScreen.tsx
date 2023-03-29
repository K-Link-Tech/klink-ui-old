import React from 'react';
import { useDisclosure } from '@klink-ui/hooks';
import { Modal, Group, Button, Text } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@klink-ui/hooks';
import { Modal, Button, Group } from '@klink-ui/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Text mb="xl">
          It takes the entire screen and does not not have overlay and border-radius, you can use it
          small screens to save up some space. It also has fade transition by default, but you can
          change that with transition prop. Now here is an authentication form used in previous
          examples to see the difference.
        </Text>
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
}

export const fullScreen: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};