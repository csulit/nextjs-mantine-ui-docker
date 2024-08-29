import { ActionIcon, Affix, AppShell, Burger, Flex, Group, Title, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import Image from 'next/image';

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
        <Flex gap={4} align="center">
          <Flex align="center" gap={2}>
            <Image
              alt="kmc solutions"
              src="https://erpfilestack.blob.core.windows.net/public/KMC-Icon.svg"
              width={22}
              height={22}
            />
            <Title order={2} fw={900} c="navy">KMC</Title>
          </Flex>

          <Title order={4} c="black" fw={500}>LIVE CHAT CMS</Title>

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
