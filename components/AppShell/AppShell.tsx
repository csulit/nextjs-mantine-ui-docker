'use client';

import { ReactNode, useEffect, useReducer } from 'react';
import {
  ActionIcon,
  Affix,
  AppShell,
  Burger,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import {
  IconChartArea,
  IconDashboard,
  IconMessage,
  IconRobotFace,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import { defaultValues } from '@/configs/default-values';
import { NavItem } from '../NavItem/NavItem';

const NAV_ITEMS = [
  {
    id: 'dashboard',
    active: true,
    label: 'Dashboard',
    href: '/',
    leftSection: <IconDashboard size="1.5rem" stroke={1.6} />,
    child: null,
  },
  {
    id: 'livechat',
    active: false,
    label: 'Live Chat',
    href: '#livechat',
    leftSection: <IconMessage size="1.5rem" stroke={1.6} />,
    child: [
      {
        id: 'livechat-chats',
        active: false,
        label: 'Chats',
        href: '#livechat-chats',
        leftSection: null,
        child: null,
      },
      {
        id: 'livechat-agents',
        active: false,
        label: 'Agents',
        href: '#livechat-agents',
        leftSection: null,
        child: null,
      },
      {
        id: 'livechat-settings',
        active: false,
        label: 'Settings',
        href: '#livechat-settings',
        leftSection: null,
        child: [
          {
            id: 'livechat-settings-ai',
            active: false,
            label: 'Ai',
            href: '#livechat-settings-ai',
            leftSection: <IconRobotFace size="1.5rem" stroke={1.6} />,
            child: null,
          },
        ],
      },
    ],
  },
  {
    id: 'analytics',
    active: false,
    label: 'Analytics',
    href: '#analytics',
    leftSection: <IconChartArea size="1.5rem" stroke={1.6} />,
    child: [
      {
        id: 'analytics-chats',
        active: false,
        label: 'Chats',
        href: '#analytics-chats',
        leftSection: null,
        child: null,
      },
      {
        id: 'analytics-tickets',
        active: false,
        label: 'Tickets',
        href: '#analytics-tickets',
        leftSection: null,
        child: null,
      },
      {
        id: 'analytics-export-reports',
        active: false,
        label: 'Export reports',
        href: '#analytics-export-reports',
        leftSection: null,
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
  leftSection: React.ReactNode;
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
  const { APPSHELL_HEADER_HEIGTH, APPSHELL_NAVBAR_WIDTH } = defaultValues;

  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE', payload: pathname });
  }, [pathname]);

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppShell
      header={{ height: APPSHELL_HEADER_HEIGTH }}
      navbar={{ width: APPSHELL_NAVBAR_WIDTH, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
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
      <AppShell.Navbar p="md">
        {navState.map((navItem) => (
          <NavItem key={navItem.id} item={navItem} />
        ))}
        <Affix pb="md" pl="md" position={{ bottom: 0, left: 0 }}>
          <UserButton />
        </Affix>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
