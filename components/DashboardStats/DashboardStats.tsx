'use client';

import { Card, Center, Flex, Paper, Text, Title } from '@mantine/core';
import { theme } from '@/theme';

const stats = [
  {
    id: 1,
    title: 'Active',
    value: 100,
  },
  {
    id: 2,
    title: 'Pending',
    value: 87,
  },
  {
    id: 3,
    title: 'Missed',
    value: 20,
  },
  {
    id: 4,
    title: 'Closed',
    value: 65,
  },
];

interface StatsColor {
  [key: string]: {
    bg: string;
    dot: string;
    text: string;
  };
}

const statsColors: StatsColor = {
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
    bg: theme.other?.neutral100,
    text: theme.other?.neutral800,
  },
  missed:
  {
    dot: theme.other?.red600,
    bg: theme.other?.red300,
    text: theme.other?.red800,
  },
};

export default function DashboardStats() {
  return (
    <Flex align="center" gap="md">
      {stats.map((stat) => (
        <Card
          key={stat.id}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          h={100}
          w={150}
        >
          <Card.Section p="lg">
            <Center>
              <Flex direction="column" align="center">
                <Title
                  order={1}
                  fw={800}
                  c={statsColors[stat.title.toLowerCase()].dot}
                >
                  {stat.value}
                </Title>

                <Flex align="center" gap={3}>
                  <Paper
                    radius="xl"
                    h={10}
                    w={10}
                    bg={statsColors[stat.title.toLowerCase()].dot}
                  />
                  <Text
                    size="sm"
                    fw={700}
                    mt={0.5}
                    c={statsColors[stat.title.toLowerCase()].text}
                  >
                    {stat.title}
                  </Text>
                </Flex>
              </Flex>
            </Center>
          </Card.Section>
        </Card>
      ))}
    </Flex>
  );
}
