'use client';

import { Box, Button, Card, Flex, Paper, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Table } from '@/components/Table/Table';
import { chatTableDummyData } from '@/configs/default-values';
import { SideDrawer } from '@/components/SideDrawer/SideDrawer';
import { theme } from '@/theme';

export default function ChatPage() {
  const [sideDrawerOpen, { open, close }] = useDisclosure(false);
  return (
    <>
      <Flex direction="column" gap="md">
        <Title order={2}>Chats</Title>
        <Card bg="white" p="md">
          <Table data={chatTableDummyData} onView={open} />
        </Card>
      </Flex>

      <SideDrawer
        open={sideDrawerOpen}
        onClose={close}
        title="Chat"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="100%"
        >
          <Flex direction="column" gap="sm" h="16%" w="100%" p="sm">
            <Flex direction="column" gap="md">

              <Flex justify="space-between">
                <Title order={5} c={theme.other?.neutral900}>
                  Room Information
                </Title>
                <Flex gap="sm" align="center" justify="center">
                  <Button size="compact-xs" bg={theme.other?.orange600}>Edit</Button>
                  <Button size="compact-xs" bg={theme.other?.orange600}>Ticket Creation</Button>
                  <Button size="compact-xs" bg={theme.other?.red600}>End Chat</Button>
                </Flex>
              </Flex>

              <Flex direction="column" px="sm">
                <Flex justify="space-between">
                  <Text size="sm" fw={700}>John Doe</Text>
                  <Text size="sm" fw={500} c={theme.other?.orange600}>johndoe@gmail.com</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text size="sm" fw={700}>Ticket Number</Text>
                  <Text size="sm" fw={500} c={theme.other?.orange600}>SR-1234XX</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text size="sm" fw={700}>Queue Time</Text>
                  <Text
                    size="sm"
                    fw={500}
                    c={theme.other?.orange600}
                  >
                   2 hours
                  </Text>
                </Flex>
                <Flex justify="space-between">
                  <Text size="sm" fw={700}>Created at</Text>
                  <Text
                    size="sm"
                    fw={500}
                    c={theme.other?.orange600}
                  >
                   a minute ago
                  </Text>
                </Flex>
                <Flex justify="space-between">
                  <Text size="sm" fw={700}>Average of Response Time</Text>
                  <Text
                    size="sm"
                    fw={500}
                    c={theme.other?.orange600}
                  >
                   53 seconds
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Box flex="1 10%" h="100%" w="100%" p="sm">
            <Paper w="100%" h="100%" radius="md" p="sm">Chat Session goes here...</Paper>
          </Box>

        </Flex>
      </SideDrawer>
    </>
  );
}
