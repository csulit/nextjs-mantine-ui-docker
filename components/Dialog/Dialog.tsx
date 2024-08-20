import { Box, Button, Flex, Modal, Title } from '@mantine/core';
import { IconCircleXFilled } from '@tabler/icons-react';
import { theme } from '@/theme';

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Dialog({ title, isOpen, onClose, children }:DialogProps) {
  return (
    <Modal.Root
      opened={isOpen}
      onClose={onClose}
      centered>
      <Modal.Overlay style={{ backgroundOpacity: 0.5, blur: 4 }} />

      <Modal.Content>
        <Modal.Header>
          <Modal.Title w="100%">
            <Flex flex="1 1 0%" align="center" justify="space-between">
              <Title order={4}>{title}</Title>
              <Button
                size="compact-xs"
                variant="transparent"
              >
                <IconCircleXFilled
                  size={18}
                  color={theme.other?.red600}
                  onClick={onClose}
                  />
              </Button>
            </Flex>
          </Modal.Title>
        </Modal.Header>
        <Box h={1} w="100%" bg={theme.other?.neutral400} />
        <Modal.Body h="94%" pos="relative" p={0}>
          <Box h="100%" w="100%">
            {children}
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
 );
}
