'use client';

import { useState } from 'react';
import { ActionIcon, Affix, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMessage } from '@tabler/icons-react';
import Iframe from 'react-iframe';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { env } from '@/utils/env';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(min-width: 640px)');

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Affix position={{ bottom: 15, right: isMobile ? 0 : 15 }}>
        <Flex direction="column" justify="flex-end" align="flex-end" gap={10}>
          {open && (
            <Iframe
              scrolling="no"
              loading="eager"
              allowFullScreen
              id="kmc-live-chat-pop-up"
              url={`${env.NEXT_PUBLIC_APP_URL}/public/livechat`}
              width="400px"
              height="560px"
              styles={{
                border: 'none',
                borderRadius: 16,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
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
