'use client';

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Paper,
  ScrollArea,
  Skeleton,
  Text,
  Textarea,
  Transition,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { IconUpload, IconSend2 } from '@tabler/icons-react';
import { ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

export default function PublicLiveChat() {
  const scrollViewport = useRef<HTMLDivElement>(null);
  const { width: viewportWidth } = useViewportSize();
  const [message, setMessage] = useState('');
  const [opened, setOpened] = useState(false);

  const [x, setX] = useState([
    {
      id: 1,
      systemMessage: true,
      name: 'Kim McKinsey',
      email: 'kim.mckinsey@kmc.solutions',
      message: 'Hi Gelo, Welcome to our live chat support! How can we assist you today?',
      components: [
        {
          name: 'InitialConcernOptions',
          value: null,
        },
      ],
      messages: [
        'You may also just type in your inquiries 😁',
        'Pero please wag kang bida bida 🤣',
      ],
      createdAt: '10:48 AM',
    },
  ]);

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
    <Flex justify="flex-start" align="center" direction="column" h="100%">
      <Box component="div" p={10} h="70" w="100%" bg={{ base: 'orange', dark: 'rgb(255, 165, 0)' }}>
        a
      </Box>
      <ScrollArea
        type="scroll"
        scrollbarSize={6}
        scrollbars="y"
        flex={1}
        pt={10}
        px={10}
        h="100%"
        w="100%"
        viewportRef={scrollViewport}
      >
        {x.map((data) => (
          <Group
            mb={10}
            wrap="wrap"
            key={data.id}
            mr={isOdd(data.id) ? 0 : 5}
            align="flex-start"
            justify={isOdd(data.id) ? 'flex-start' : 'flex-end'}
          >
            {isOdd(data.id) && <Avatar radius="xl" />}
            <Box
              component="div"
              maw={`${viewportWidth / 1.5}px`}
              style={{ wordWrap: 'break-word' }}
            >
              <Flex
                direction="column"
                align={data.systemMessage ? 'flex-start' : 'flex-end'}
                gap={data.systemMessage && data.components.length ? 5 : 0}
              >
                <Paper shadow="xs" p="sm" radius="md" w="auto">
                  <Text size="xs">{data.message}</Text>
                </Paper>
                {data.components.map((component) => (
                  <Paper key={component.name} shadow="xs" p="sm" radius="md" w="auto">
                    <Button mb={10} size="xs" w="100%">
                      Follow-Up
                    </Button>
                    <Button size="xs" w="100%">
                      Talk to SD Agent
                    </Button>
                  </Paper>
                ))}
                {data.messages.map((extra) => (
                  <Paper key={extra} shadow="xs" p="sm" radius="md" w="auto">
                    <Text size="xs">{extra}</Text>
                  </Paper>
                ))}
              </Flex>
            </Box>
          </Group>
        ))}
      </ScrollArea>
      <Box component="div" p={10} w="100%" style={{ position: 'relative' }}>
        <Transition mounted={opened} transition="slide-up" duration={400} timingFunction="ease">
          {(styles) => (
            <Center>
              <Flex
                style={{
                  ...styles,
                  paddingTop: 5,
                  position: 'absolute',
                  offset: 1,
                  top: -10,
                }}
                gap={6}
              >
                <Skeleton height={10} circle />
                <Skeleton height={10} circle />
                <Skeleton height={10} circle />
                <Skeleton height={10} circle />
              </Flex>
            </Center>
          )}
        </Transition>
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
                onClick={() => setOpened(!opened)}
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
