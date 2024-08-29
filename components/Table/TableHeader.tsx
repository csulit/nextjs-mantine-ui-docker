import { IconChevronDown, IconChevronUp, IconSelector } from '@tabler/icons-react';
import { Center, Group, rem, Table, Text, UnstyledButton } from '@mantine/core';
import classes from './Table.module.css';

interface ThProps {
  children: React.ReactNode;
  reversed?: boolean;
  sorted?: boolean;
  onSort?: () => void;
  w?: number;
}

export function TableHeader({ children, reversed, sorted, onSort, w }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th} w={w || 'auto'}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          {onSort &&
            <Center className={classes.icon}>
              <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </Center>
          }
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}
