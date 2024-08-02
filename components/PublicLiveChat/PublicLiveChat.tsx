'use client';

import { Affix, Flex } from '@mantine/core';
import { useState } from 'react';
import { LiveChatIframe } from '../LiveChatIframe/LiveChatIframe';
import { LiveChatToggle } from '../LiveChatToggle/LiveChatToggle';

export default function PublicLiveChat() {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <Affix position={{ bottom: 10, right: 10 }}>
      <Flex direction="column" justify="flex-end" align="flex-end" gap={10}>
        <LiveChatIframe open={open} />
        <LiveChatToggle onToggle={onToggle} />
      </Flex>
    </Affix>
  );
}
