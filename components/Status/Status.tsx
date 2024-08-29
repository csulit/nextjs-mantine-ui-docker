'use client';

import { Flex, Paper, Text } from '@mantine/core';

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
    dot: 'green.6',
    bg: 'green.3',
    text: 'green.8',
  },
  pending:
  {
    dot: 'orange.6',
    bg: 'orange.3',
    text: 'orange.8',
  },
  closed:
  {
    dot: 'neutral.6',
    bg: 'neutral.3',
    text: 'neutral.8',
  },
  missed:
  {
    dot: 'red.6',
    bg: 'red.3',
    text: 'red.8',
  },
};

export default function Status({ status, label }:StatusProps) {
  return (
    <Paper
      radius="xl"
      bg={statusColors[status.toLowerCase()].bg}
      w="fit-content"
    >
      <Flex
        gap={4}
        align="center"
        px={6}
        h={20}
      >
        <Paper
          radius="xl"
          h={10}
          w={10}
          bg={statusColors[status.toLowerCase()].dot}
        />
        <Text
          mt={0.5}
          size="xs"
          c={statusColors[status.toLowerCase()].text}
          fw={700}
        >
          {label}
        </Text>
      </Flex>
    </Paper>
  );
}
