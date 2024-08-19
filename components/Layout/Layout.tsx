'use client';

import { ReactNode } from 'react';
import {
  AppShell,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { defaultValues } from '@/configs/default-values';
import { theme } from '@/theme';
import { LayoutHeader } from './LayoutHeader';
import { LayoutNavbar } from './LayoutNavBar';

export function Layout({ children }: { children: ReactNode }) {
  const [navOpen, { toggle: toggleNav }] = useDisclosure();
  const { APPSHELL_HEADER_HEIGHT, APPSHELL_NAVBAR_WIDTH } = defaultValues;

  return (
    <AppShell
      header={{ height: APPSHELL_HEADER_HEIGHT }}
      navbar={{ width: APPSHELL_NAVBAR_WIDTH, breakpoint: 'sm', collapsed: { mobile: !navOpen } }}
      padding="md"
    >
      <LayoutHeader navOpen={navOpen} toggleNav={toggleNav} />
      <LayoutNavbar />
      <AppShell.Main bg={theme.other?.neutral300}>{children}</AppShell.Main>
    </AppShell>
  );
}
