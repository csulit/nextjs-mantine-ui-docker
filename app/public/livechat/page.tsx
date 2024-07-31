'use client';

import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  Group,
  Paper,
  ScrollArea,
  Text,
  Textarea,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { IconUpload, IconSend2 } from '@tabler/icons-react';
import { ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

export default function PublicLiveChat() {
  const scrollViewport = useRef<HTMLDivElement>(null);
  const { width } = useViewportSize();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([
    'asdasdasdasd',
    'asdasdasdasdasdasd',
    'asdasd',
  ]);

  const scrollToBottom = () =>
    scrollViewport.current!.scrollTo({
      top: scrollViewport.current!.scrollHeight,
      behavior: 'smooth',
    });

  const scrollToTop = () => scrollViewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  const isOdd = (num: number): boolean => num % 2 !== 0;

  const handlePaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the items from the clipboard
    const { items } = event.clipboardData || event.nativeEvent.clipboardData;

    // Iterate over the items to find an image
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (loadEvent) => {
            if (loadEvent.target && typeof loadEvent.target.result === 'string') {
              // Set the image source to the pasted image
              console.log(loadEvent.target.result);
            }
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      setMessages((oldData) => [...oldData, message]);
      setMessage('');
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return (
    <Flex justify="flex-start" align="flex-start" direction="column" h="100%">
      <Box component="div" p={10} h="70" w="100%" bg="orange">
        a
      </Box>
      <ScrollArea
        type="scroll"
        scrollbarSize={6}
        scrollbars="y"
        flex={1}
        p={10}
        h="100%"
        w="100%"
        viewportRef={scrollViewport}
      >
        {messages.map((data, index) => (
          <Group
            mb={10}
            wrap="wrap"
            key={index}
            mr={isOdd(index) ? 0 : 5}
            align="center"
            justify={isOdd(index) ? 'flex-start' : 'flex-end'}
          >
            {isOdd(index) && <Avatar radius="xl" />}
            <Box component="div" maw={`${width / 2}px`} style={{ wordWrap: 'break-word' }}>
              <Paper shadow="xs" p="sm" radius="md" w="auto">
                <Text size="xs">{data}</Text>
              </Paper>
            </Box>
          </Group>
        ))}
      </ScrollArea>
      <Box component="div" p={10} w="100%">
        <Textarea
          radius={20}
          value={message}
          styles={{
            input: {
              overflow: 'hidden',
              paddingTop: 5,
              paddingBottom: 5,
              paddingRight: 90,
            },
          }}
          rightSectionWidth="auto"
          rightSection={
            <Group gap="xs" mr={10}>
              <ActionIcon
                size="lg"
                radius={100}
                loading={false}
                loaderProps={{ type: 'dots' }}
                onClick={scrollToTop}
              >
                <IconUpload />
              </ActionIcon>
              <ActionIcon
                size="lg"
                radius={100}
                loading={false}
                loaderProps={{ type: 'dots' }}
                onClick={scrollToBottom}
              >
                <IconSend2 />
              </ActionIcon>
            </Group>
          }
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          onChange={(event) => setMessage(event.target.value)}
        />
      </Box>
    </Flex>
  );
}
