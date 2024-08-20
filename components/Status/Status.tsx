'use client';

import { Flex, Paper, Text } from '@mantine/core';
import { theme } from '@/theme';

interface StatusProps {
  status: string;
  label: string;
}

interface StatusColor {
  [key: string]: {
    bg: string;
    dot: string;
    text: string;
  };
}

const statusColors: StatusColor = {
  active:
  {
    dot: theme.other?.green600,
    bg: theme.other?.green300,
    text: theme.other?.green800,
  },
  pending:
  {
    dot: theme.other?.orange600,
    bg: theme.other?.orange300,
    text: theme.other?.orange800,
  },
  closed:
  {
    dot: theme.other?.neutral600,
    bg: theme.other?.neutral300,
    text: theme.other?.neutral800,
  },
  missed:
  {
    dot: theme.other?.red600,
    bg: theme.other?.red300,
    text: theme.other?.red800,
  },
};

export default function Status({ status, label }:StatusProps) {
  return (
    <Paper
      radius="xl"
      bg={statusColors[status.toLowerCase()].bg}
      w={90}
    >
      <Flex
        gap="xs"
        align="center"
        px="xs"
        h={25}
      >
        <Paper
          radius="xl"
          h={10}
          w={10}
          bg={statusColors[status.toLowerCase()].dot}
        />
        <Text mt={0.5} size="xs" c={statusColors[status.toLowerCase()].text} fw={700}>{label}</Text>
      </Flex>
    </Paper>
  );
}
