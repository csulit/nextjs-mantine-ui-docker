import { ActionIcon, Affix, AppShell, Burger, Flex, Group, Paper, Title, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { theme } from '@/theme';

interface LayoutHeaderProps {
  navOpen: boolean;
  toggleNav: () => void;
}

export function LayoutHeader({ navOpen, toggleNav }:LayoutHeaderProps) {
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppShell.Header>
      <Group h="100%" px="md" align="center">
        <Burger opened={navOpen} onClick={toggleNav} hiddenFrom="sm" size="sm" />
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
  );
}
