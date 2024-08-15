import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, UnstyledButton, rem, Flex } from '@mantine/core';
import { Icon, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classes from './NavLinks.module.css';
import { theme } from '@/theme';

interface LinksGroupProps {
  id: string;
  active: boolean;
  label: string;
  href: string;
  icon: Icon | null;
  child: LinksGroupProps[] | null;
}

export function NavLinks({ icon: LinkIcon, label, child, active, href }: LinksGroupProps) {
  const hasChild = Array.isArray(child);
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  const items = (hasChild ? child : []).map((link) => (
    <Link
      data-active={link.active}
      className={classes.link}
      href={link.href}
      key={link.label}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      {hasChild &&
        <>
        <UnstyledButton
          onClick={() => setOpened((o) => !o)}
          data-active={!!(active || child.find(a => a.active))}
          className={classes.control}
        >
          <Group justify="space-between" gap="md" p="xs">
            <Flex align="center" c="white">
              <ThemeIcon variant="filled" bg={theme.other?.pumpkin} size={40}>
                {LinkIcon && <LinkIcon size="1.5rem" stroke={1.6} color="white" />}
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Flex>

              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? 'rotate(-90deg)' : 'none',
                }}
              />
          </Group>
        </UnstyledButton>
        <Collapse in={opened}>
          <Flex w="95%" py="xs" gap="xs" direction="column">
            {items}
          </Flex>
        </Collapse>
        </>
      }

      {!hasChild &&
        <UnstyledButton
          onClick={() => router.push(href)}
          data-active={active}
          className={classes.control}
        >
          <Group justify="space-between" gap="md" p="xs">
            <Flex align="center" c="white">
              <ThemeIcon variant="filled" bg={theme.other?.pumpkin} size={40}>
                {LinkIcon && <LinkIcon size="1.5rem" stroke={1.6} color="white" />}
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Flex>
          </Group>
        </UnstyledButton>
      }
    </>
  );
}
