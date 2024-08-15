import {
  Center,
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
  keys,
  rem,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp, IconSearch, IconSelector } from '@tabler/icons-react';
import { useState } from 'react';
import classes from './SortableTable.module.css';

interface RowData {
  id: string;
  status: string;
  visitor: string;
  agent: string;
  browser:string;
  time: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort:()=> void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    id: '1',
    status: 'Unclaimed',
    visitor: 'Athena Weissnat',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
  {
    id: '2',
    status: 'In-Progress',
    visitor: 'John Doe',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
  {
    id: '3',
    status: 'Closed',
    visitor: 'Jane Doe',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
  {
    id: '4',
    status: 'Unclaimed',
    visitor: 'Athena Weissnat',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
  {
    id: '5',
    status: 'Unclaimed',
    visitor: 'Athena Weissnat',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
];

export function SortableTable() {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.status}</Table.Td>
      <Table.Td>{row.visitor}</Table.Td>
      <Table.Td>{row.agent}</Table.Td>
      <Table.Td>{row.browser}</Table.Td>
      <Table.Td>{row.time}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === 'status'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('status')}
            >
              Status
            </Th>
            <Th
              sorted={sortBy === 'visitor'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('visitor')}
            >
              Visitor
            </Th>
            <Th
              sorted={sortBy === 'agent'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('agent')}
            >
              Agent
            </Th>

            <Th
              sorted={sortBy === 'browser'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('browser')}
            >
              Browser
            </Th>

            <Th
              sorted={sortBy === 'time'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('time')}
            >
              Time
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
