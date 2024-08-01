import { ActionIcon } from '@mantine/core';
import { IconMessage } from '@tabler/icons-react';

interface LiveChatToggleProps {
  onToggle: () => void;
}

export function LiveChatToggle({ onToggle }: LiveChatToggleProps) {
  return (
    <ActionIcon
      size="xl"
      radius={100}
      loading={false}
      loaderProps={{ type: 'dots' }}
      onClick={onToggle}
    >
      <IconMessage />
    </ActionIcon>
  );
}
