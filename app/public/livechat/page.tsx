'use client';

import { ActionIcon, Box, Flex, Group, Textarea } from '@mantine/core';
import { IconUpload, IconSend2 } from '@tabler/icons-react';
import { ClipboardEvent, KeyboardEvent } from 'react';

export default function PublicLiveChat() {
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

  return (
    <Flex justify="flex-start" align="flex-start" direction="column" h="100%">
      <Box component="div" p={10} h="70" w="100%" bg="orange">
        a
      </Box>
      <Box
        component="div"
        flex={1}
        px={10}
        h="100%"
        w="100%"
        style={{
          overflow: 'auto',
          overflowX: 'hidden',
        }}
      >
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </Box>
      <Box component="div" p={10} w="100%">
        <Textarea
          radius={20}
          rightSectionWidth="auto"
          rightSection={
            <Group gap="xs" mr={10}>
              <ActionIcon size="lg" radius={100} loading={false} loaderProps={{ type: 'dots' }}>
                <IconUpload />
              </ActionIcon>
              <ActionIcon size="lg" radius={100} loading={false} loaderProps={{ type: 'dots' }}>
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
