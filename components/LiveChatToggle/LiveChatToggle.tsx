import { ActionIcon, Popover, Text, Title } from '@mantine/core';
import { IconMessage } from '@tabler/icons-react';
import { useState } from 'react';

interface LiveChatToggleProps {
  iframeOpened: boolean;
  onToggle: () => void;
}

export function LiveChatToggle({ iframeOpened, onToggle }: LiveChatToggleProps) {
  const [opened, setOpened] = useState(true);
  return (
    <Popover
      offset={2.5}
      radius={20}
      arrowSize={16}
      arrowOffset={16}
      position="top-end"
      arrowPosition="side"
      withArrow
      shadow="md"
      opened={opened && !iframeOpened}
      onChange={setOpened}
    >
      <Popover.Target>
        <ActionIcon
          size="xl"
          radius={100}
          loading={false}
          loaderProps={{ type: 'dots' }}
          onClick={onToggle}
        >
          <IconMessage />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Title order={6}>Hey there 🤓!</Title>
        <Text size="xs">Need help? Contact Service Desk!</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
