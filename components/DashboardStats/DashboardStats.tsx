'use client';

import { Card, Center, Flex, Paper, Text, Title } from '@mantine/core';
import { IconMessage2Bolt, IconMessage2Cancel, IconMessage2Check, IconMessage2Exclamation } from '@tabler/icons-react';

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

const iconProps = {
  height: 20,
  width: 20,
  color: 'white',
  opacity: 0.8,
};

export default function DashboardStats() {
  return (
    <Flex align="center" gap="md">
      {stats.map((stat) => (
        <Card
          key={stat.id}
          shadow="sm"
          radius="md"
          withBorder
          h={80}
          w={160}
        >
          <Center h="100%">
            <Card.Section>
              <Flex direction="column">
                <Flex gap="xs" align="center">
                  <Paper
                    radius="sm"
                    h={40}
                    w={40}
                    style={{ overflow: 'hidden' }}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      bg={statsColors[stat.title.toLowerCase()].dot}
                      h="100%"
                      w="100%"
                    >
                      {stat.title === 'Active' &&
                        <IconMessage2Bolt
                          {...iconProps}
                        />
                      }

                      {stat.title === 'Pending' &&
                        <IconMessage2Exclamation
                          {...iconProps}
                        />
                      }

                      {stat.title === 'Missed' &&
                        <IconMessage2Cancel
                          {...iconProps}
                        />
                      }

                      {stat.title === 'Closed' &&
                        <IconMessage2Check
                          {...iconProps}
                        />
                      }
                    </Flex>
                  </Paper>
                  <Flex direction="column" gap={5}>
                    <Title
                      order={3}
                      fw={800}
                      c={statsColors[stat.title.toLowerCase()].dot}
                      lh={0.8}
                    >
                      {stat.value}
                    </Title>

                    <Text
                      size="sm"
                      fw={700}
                      c={statsColors[stat.title.toLowerCase()].text}
                    >
                      {stat.title}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card.Section>
          </Center>
        </Card>
      ))}
    </Flex>
  );
}
