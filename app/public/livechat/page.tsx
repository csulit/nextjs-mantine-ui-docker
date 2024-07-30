'use client';

import { ActionIcon, Box, Flex, Textarea } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';
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
      <Box component="div" p={10} h="70" w="100%" bg="red">
        a
      </Box>
      <Box component="div" flex={1} px={10} h="100%" w="100%" style={{ overflow: 'scroll' }}>
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
          rightSection={
            <ActionIcon
              size="lg"
              mr={20}
              radius={100}
              loading={false}
              loaderProps={{ type: 'dots' }}
            >
              <IconSend2 />
            </ActionIcon>
          }
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
        />
      </Box>
    </Flex>
  );
}
