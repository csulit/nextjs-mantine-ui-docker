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
import { IconUpload, IconSend2 } from '@tabler/icons-react';
import { ClipboardEvent, KeyboardEvent, useRef } from 'react';

export default function PublicLiveChat() {
  const scrollViewport = useRef<HTMLDivElement>(null);

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
      console.log('Enter key pressed without Shift');
      // Add your custom logic here for handling Enter key
    }
  };

  const scrollToBottom = () =>
    scrollViewport.current!.scrollTo({
      top: scrollViewport.current!.scrollHeight,
      behavior: 'smooth',
    });

  const scrollToTop = () => scrollViewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

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
        <Group wrap="nowrap" mb={10}>
          <Avatar radius="xl" />
          <Paper shadow="xs" p="sm" radius="md" maw="60%">
            <Text size="xs">
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </Group>
        <Group justify="flex-end" mr={5} wrap="nowrap" mb={10}>
          <Paper shadow="xs" p="sm" radius="md" maw="60%">
            <Text size="xs">
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </Group>
        <Group wrap="nowrap" mb={10}>
          <Avatar radius="xl" />
          <Paper shadow="xs" p="sm" radius="md" maw="60%">
            <Text size="xs">
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </Group>
        <Group justify="flex-end" mr={5} wrap="nowrap" mb={10}>
          <Paper shadow="xs" p="sm" radius="md" maw="60%">
            <Text size="xs">
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </Group>
        <Group wrap="nowrap" mb={10}>
          <Avatar radius="xl" />
          <Paper shadow="xs" p="sm" radius="md" maw="60%">
            <Text size="xs">
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </Group>
        <Group justify="flex-end" mr={5} wrap="nowrap" mb={10}>
          <Paper shadow="xs" p="sm" radius="md" maw="60%">
            <Text size="xs">
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </Group>
      </ScrollArea>
      <Box component="div" p={10} w="100%">
        <Textarea
          radius={20}
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
        />
      </Box>
    </Flex>
  );
}
