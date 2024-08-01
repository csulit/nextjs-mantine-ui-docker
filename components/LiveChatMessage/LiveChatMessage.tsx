'use client';

import { useEffect, useRef, useState } from 'react';
import { Avatar, Box, Group, Paper, ScrollArea, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export default function LiveChatMessage() {
  const scrollViewport = useRef<HTMLDivElement>(null);
  const { width: viewportWidth } = useViewportSize();
  const [messages, setMessages] = useState<string[]>([
    'Hello everyone!',
    'How are you all doing today?',
    'Did anyone watch the game last night?',
    'I just finished a great book!',
    'What are your plans for the weekend?',
    'Can someone help me with this code?',
    'I love this new feature!',
    'Does anyone have any good movie recommendations?',
    'I am learning a new programming language.',
    'What is your favorite hobby?',
    'I just got a new job!',
    'Has anyone tried the new restaurant downtown?',
    'I am working on a new project.',
    'What is the weather like where you are?',
    'I just adopted a new pet!',
    'Does anyone play any musical instruments?',
    'I am planning a trip soon.',
    'What is your favorite book?',
    'I just started a new workout routine.',
    'Can someone explain this concept to me?',
  ]);

  const setScrollViewportToBottom = () => {
    const messagesElement = scrollViewport?.current;
    if (messagesElement) {
      messagesElement.scrollTop = messagesElement.scrollHeight;
    }
  };

  const scrollToBottom = () =>
    scrollViewport.current?.scrollTo({
      top: scrollViewport.current?.scrollHeight,
      behavior: 'smooth',
    });

  const scrollToTop = () => scrollViewport.current?.scrollTo({ top: 0, behavior: 'smooth' });

  const isOdd = (num: number): boolean => num % 2 !== 0;

  useEffect(() => {
    setScrollViewportToBottom();
  }, [viewportWidth]);

  useEffect(() => {
    if (messages.length) {
      scrollToBottom();
    }
  }, [messages.length]);

  if (!viewportWidth) {
    return null;
  }

  return (
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
          key={index + 1}
          mr={isOdd(index + 1) ? 0 : 5}
          align="center"
          justify={isOdd(index + 1) ? 'flex-start' : 'flex-end'}
        >
          {isOdd(index + 1) && <Avatar radius="xl" />}
          <Box component="div" maw={`${viewportWidth / 1.5}px`} style={{ wordWrap: 'break-word' }}>
            <Paper shadow="xs" p="sm" radius="md" w="auto">
              <Text size="xs">{data}</Text>
            </Paper>
          </Box>
        </Group>
      ))}
    </ScrollArea>
  );
}
