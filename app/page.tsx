'use client';

import { useState } from 'react';
import { ActionIcon, Affix, Flex } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { IconMessage } from '@tabler/icons-react';
import Iframe from 'react-iframe';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { env } from '@/utils/env';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const { height, width } = useViewportSize();
  const isBigScreen = useMediaQuery('(min-width: 640px)');
  const affixSize = { bottom: !isBigScreen ? 5 : 20, right: !isBigScreen ? 5 : 20 };

  console.log({ height, width });

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Affix position={affixSize}>
        <Flex direction="column" justify="flex-end" align="flex-end" gap={10}>
          {open && (
            <Iframe
              scrolling="no"
              loading="eager"
              allowFullScreen
              id="kmc-live-chat-pop-up"
              url={`${env.NEXT_PUBLIC_APP_URL}/public/livechat`}
              width={!isBigScreen ? `${width}px` : '400px'}
              height={!isBigScreen ? `${height - 5}px` : '560px'}
              styles={{
                border: 'none',
                borderRadius: 16,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          )}
          {!isBigScreen && open && (
            <ActionIcon
              size="xl"
              radius={100}
              loading={false}
              loaderProps={{ type: 'dots' }}
              onClick={() => setOpen(!open)}
            >
              <IconMessage />
            </ActionIcon>
          )}
        </Flex>
      </Affix>
    </>
  );
}
