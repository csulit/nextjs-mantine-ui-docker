'use client';

import { ReactNode } from 'react';
import { AppShell, Burger, Group, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconChartArea, IconMessage, IconRobotFace, IconDashboard } from '@tabler/icons-react';
import Link from 'next/link';

export function BasicAppShell({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavLink
          label="Dashboard"
          styles={{
            label: {
              fontSize: 16,
              fontWeight: 500,
            },
          }}
          href="/"
          component={Link}
          leftSection={<IconDashboard size="1.5rem" stroke={1.6} />}
        />
        <NavLink
          href="#required-for-focus"
          label="Live Chat"
          styles={{
            label: {
              fontSize: 16,
              fontWeight: 500,
            },
          }}
          leftSection={<IconMessage size="1.5rem" stroke={1.6} />}
          childrenOffset={28}
        >
          <NavLink label="Chats" href="#required-for-focus" component={Link} />
          <NavLink label="Agents" href="#required-for-focus" />
          <NavLink
            label="Settings"
            styles={{
              label: {
                fontSize: 14,
                fontWeight: 500,
              },
            }}
            childrenOffset={28}
            href="#required-for-focus"
          >
            <NavLink
              label="Ai"
              href="#required-for-focus1"
              leftSection={<IconRobotFace size="1rem" stroke={1.5} />}
            />
            <NavLink label="Second child link" href="#required-for-focus2" />
            <NavLink label="Third child link" href="#required-for-focus3" />
          </NavLink>
        </NavLink>

        <NavLink
          href="#required-for-focus"
          label="Analytics"
          styles={{
            label: {
              fontSize: 16,
              fontWeight: 500,
            },
          }}
          leftSection={<IconChartArea size="1.5rem" stroke={1.6} />}
          childrenOffset={28}
          defaultOpened
        >
          <NavLink label="Chats" href="#required-for-focus" />
          <NavLink label="Tickets" href="#required-for-focus" />
          <NavLink label="Export reports" href="#required-for-focus" />
        </NavLink>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
