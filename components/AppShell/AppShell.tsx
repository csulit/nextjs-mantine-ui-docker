'use client';

import { ReactNode, useEffect, useReducer } from 'react';
import {
  ActionIcon,
  Affix,
  AppShell,
  Burger,
  Flex,
  Group,
  Paper,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import {
  IconChartArea,
  IconDashboard,
  IconMessage,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import { defaultValues } from '@/configs/default-values';
import { theme } from '@/theme';
import { NavLinks } from '../NavLinks/NavLinks';

const NAV_ITEMS = [
  {
    id: 'dashboard',
    active: true,
    label: 'Dashboard',
    href: '/',
    icon: IconDashboard,
    child: null,
  },
  {
    id: 'livechat',
    active: false,
    label: 'Live Chat',
    href: '#livechat',
    icon: IconMessage,
    child: [
      {
        id: 'livechat-chats',
        active: false,
        label: 'Chats',
        href: '/livechat/chats',
        icon: null,
        child: null,
      },
      {
        id: 'livechat-agents',
        active: false,
        label: 'Agents',
        href: '/livechat/agents',
        icon: null,
        child: null,
      },
    ],
  },
  {
    id: 'analytics',
    active: false,
    label: 'Analytics',
    href: '#analytics',
    icon: IconChartArea,
    child: [
     {
        id: 'analytics-summary',
        active: false,
        label: 'Summary',
        href: '/analytics/summary',
        icon: null,
        child: null,
      },
      {
        id: 'analytics-chats',
        active: false,
        label: 'Chats',
        href: '/analytics/chats',
        icon: null,
        child: null,
      },
      {
        id: 'analytics-tickets',
        active: false,
        label: 'Tickets',
        href: '/analytics/tickets',
        icon: null,
        child: null,
      },
      {
        id: 'analytics-export-reports',
        active: false,
        label: 'Export reports',
        href: '/analytics/reports',
        icon: null,
        child: null,
      },
    ],
  },
];

interface NavItem {
  id: string;
  active: boolean;
  label: string;
  href: string;
  icon: React.FC<any> | null;
  child: NavItem[] | null;
}

type NavState = NavItem[];

type NavAction = {
  type: 'SET_ACTIVE';
  payload: string;
};

const initialNavState: NavState = NAV_ITEMS;

const navReducer = (state: NavState, action: NavAction): NavState => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return state.map((navItem) => ({
        ...navItem,
        active: navItem.href === action.payload,
        child: navItem.child
          ? navItem.child.map((childItem) => ({
              ...childItem,
              active: childItem.href === action.payload,
            }))
          : null,
      }));
    default:
      return state;
  }
};

export function BasicAppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [opened, { toggle }] = useDisclosure();
  const computedColorScheme = useComputedColorScheme('light');
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const [navState, dispatch] = useReducer(navReducer, initialNavState);
  const { APPSHELL_HEADER_HEIGHT, APPSHELL_NAVBAR_WIDTH } = defaultValues;

  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE', payload: pathname });
  }, [pathname]);

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppShell
      header={{ height: APPSHELL_HEADER_HEIGHT }}
      navbar={{ width: APPSHELL_NAVBAR_WIDTH, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex gap="xs" align="center">
            <Paper bg={theme.other?.orange600}>
              <Title order={3} c="white" px="xs">KMC</Title>
            </Paper>
            <Title order={3} c={theme.other?.richBlack} fw={800}>LIVE CHAT CMS</Title>

          </Flex>
          <Affix py="md" pr="md" position={{ top: 0, right: 0 }}>
            <ActionIcon variant="filled" aria-label="Settings" onClick={toggleColorScheme}>
              {colorScheme === 'light' ? (
                <IconMoon size="1.3rem" stroke={1.3} />
              ) : (
                <IconSun size="1.3rem" stroke={1.3} />
              )}
            </ActionIcon>
          </Affix>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar bg={theme.other?.richBlack} px="xs" py="md">
        <Flex direction="column" gap="xs">
          {navState.map((navItem) => (
            <NavLinks key={navItem.id} {...navItem} />
          ))}
        </Flex>

        <Affix pb="md" pl="md" position={{ bottom: 0, left: 0 }}>
          <UserButton />
        </Affix>
      </AppShell.Navbar>
      <AppShell.Main bg={theme.other?.neutral300}>{children}</AppShell.Main>
    </AppShell>
  );
}
