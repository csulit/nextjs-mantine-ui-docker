'use client';

import { Card, Center, Group, Stack, Title } from '@mantine/core';
import classes from './DashboardStats.module.css';

const stats = [
  {
    id: 1,
    title: 'ACTIVE',
    value: 5,
  },
  {
    id: 2,
    title: 'IN QUEUE',
    value: 5,
  },
  {
    id: 3,
    title: 'MISSED',
    value: 5,
  },
  {
    id: 4,
    title: 'TICKET CREATED',
    value: 5,
  },
];

export default function DashboardStats() {
  return (
    <Group grow>
      {stats.map((stat) => (
        <Card key={stat.id} shadow="sm" padding="lg" radius="lg" withBorder>
          <Card.Section p="lg">
            <Center>
              <Stack align="center">
                <Title className={classes.title} order={1}>
                  {stat.value}
                </Title>
                <Title order={6}>{stat.title}</Title>
              </Stack>
            </Center>
          </Card.Section>
        </Card>
      ))}
    </Group>
  );
}
