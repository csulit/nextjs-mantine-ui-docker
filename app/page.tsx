'use client';

import { useState } from 'react';
import { ActionIcon, Affix, Flex } from '@mantine/core';
import { IconMessage } from '@tabler/icons-react';
import Iframe from 'react-iframe';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Flex direction="column" justify="flex-end" align="flex-end" gap={10}>
          {open && (
            <Iframe
              scrolling="no"
              allowFullScreen
              id="kmc-live-chat-pop-up"
              url="https://hub.kmc.solutions"
              width="400px"
              height="540px"
              styles={{ border: 'none', borderRadius: 16 }}
            />
          )}
          <ActionIcon
            size="xl"
            radius={100}
            loading={false}
            loaderProps={{ type: 'dots' }}
            onClick={() => setOpen(!open)}
          >
            <IconMessage />
          </ActionIcon>
        </Flex>
      </Affix>
    </>
  );
}
