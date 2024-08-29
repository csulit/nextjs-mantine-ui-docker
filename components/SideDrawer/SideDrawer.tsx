import { Box, Button, Divider, Drawer, Flex, Title } from '@mantine/core';
import { IconCircleXFilled } from '@tabler/icons-react';

interface SideDrawerProps {
  open: boolean;
  onClose: ()=>void;
  title: string;
  children: React.ReactNode;
}

export function SideDrawer({ open, onClose, title, children }:SideDrawerProps) {
  return (
    <Drawer.Root
      opened={open}
      onClose={onClose}
      position="right"
    >
      <Drawer.Overlay style={{ backgroundOpacity: 0.5, blur: 4 }} />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title w="100%">
            <Flex flex="1 1 0%" align="center" justify="space-between">
              <Title order={4}>{title}</Title>
              <Button
                size="compact-xs"
                color="red"
                variant="subtle"
                radius="xl"
                w={22}
                p={0}
              >
                <IconCircleXFilled
                  size={20}
                  onClick={onClose}
                />
              </Button>
            </Flex>
          </Drawer.Title>
        </Drawer.Header>
        <Divider />
        <Drawer.Body h="94%" pos="relative" p={0}>
          <Box pos="absolute" h="100%" w="100%">
            {children}
          </Box>
        </Drawer.Body>
      </Drawer.Content>

    </Drawer.Root>
  );
}
