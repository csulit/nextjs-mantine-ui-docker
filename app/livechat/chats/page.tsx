'use client';

import { Box, Button, Card, Divider, Flex, Input, Paper, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Table } from '@/components/Table/Table';
import { chatTableDummyData } from '@/configs/default-values';
import { SideDrawer } from '@/components/SideDrawer/SideDrawer';
import { theme } from '@/theme';
import { Dialog } from '@/components/Dialog/Dialog';

export default function ChatPage() {
  const [sideDrawerOpen, { open, close }] = useDisclosure(false);
  const [editDialogIsOpen, { open: openEditDialog, close: closeEditDialog }] = useDisclosure(false);
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
          <Flex
            direction="column"
            gap="sm"
            h="20%"
            w="100%"
            p="sm"
            bg="white"
          >
            <Flex direction="column" gap="md" p="sm">
              <Flex justify="space-between">
                <Title order={5} c={theme.other?.neutral900}>
                  Room Information
                </Title>
                <Flex gap="sm" align="center" justify="center">
                  <Button
                    size="compact-xs"
                    bg={theme.other?.orange600}
                    onClick={openEditDialog}
                  >
                    Edit
                  </Button>
                  <Button
                    size="compact-xs"
                    bg={theme.other?.orange600}
                  >
                    Ticket Creation
                  </Button>
                  <Button
                    size="compact-xs"
                    bg={theme.other?.red600}
                  >
                    End Chat
                  </Button>
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
            <Divider />
          </Flex>

          <Box flex="1 10%" h="100%" w="100%" p="sm">
            <Paper
              w="100%"
              h="100%"
              radius="md"
              bd={`1px solid ${theme.other?.neutral400}`}
              p="sm"
              shadow="lg"
            >
              Chat Session goes here...
            </Paper>
          </Box>

        </Flex>
      </SideDrawer>
      <Dialog
        title="Edit Room Info"
        isOpen={editDialogIsOpen}
        onClose={closeEditDialog}
      >
        <Flex p="md" gap="xl" direction="column">
          <Flex gap="xs" direction="column">
            <Flex gap="xs">
              <Input.Wrapper flex="1 1 0%" label="First Name" required>
                <Input type="text" placeholder="First Name" required />
              </Input.Wrapper>
              <Input.Wrapper flex="1 1 0%" label="Last Name" required>
                <Input type="text" placeholder="Last Name" required />
              </Input.Wrapper>
            </Flex>
            <Input.Wrapper label="Email" required>
              <Input type="email" placeholder="Email" required />
            </Input.Wrapper>

            <Input.Wrapper label="Ticket Number" required>
              <Input type="text" placeholder="Ticket No." required />
            </Input.Wrapper>
          </Flex>

          <Button bg={theme.other?.orange600}>Submit</Button>
        </Flex>
      </Dialog>
    </>
  );
}
