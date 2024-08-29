import {
  ScrollArea,
  Table as MUITable,
  Text,
  TextInput,
  keys,
  rem,
  Button,
  Avatar,
  Flex,
  Paper,
} from '@mantine/core';
import { IconBrandChrome, IconBrandEdge, IconBrandFirefox, IconBrandOpera, IconBrandSafari, IconFileOff, IconSearch, IconSearchOff } from '@tabler/icons-react';
import { useState } from 'react';
import Status from '../Status/Status';
import { TableHeader } from './TableHeader';
import { H6 } from '../Headings/Headings';
import { EmptyPlaceholder } from '../EmptyPlaceholder/EmptyPlaceholder';

interface RowData {
  id: string;
  status: string;
  visitor: string;
  agent: string;
  browser:string;
  time: string;
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

interface TableProps {
  data: RowData[];
  onView: ()=>void;
}

export function Table({ data, onView }:TableProps) {
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
    <MUITable.Tr key={row.id}>
      <MUITable.Td>
        <Status status={row.status} label={row.status} />
      </MUITable.Td>
      <MUITable.Td>
        <Flex align="center" gap={4}>
          <Avatar
            size={20}
            bd="1px solid orange.6"
            bg="orange.0"
          >
            <Text fw={800} size="xs" c="orange.6">
              {row.visitor.charAt(0).toUpperCase()}
            </Text>
          </Avatar>
          {row.visitor}
        </Flex>
      </MUITable.Td>
      <MUITable.Td>
        <Flex align="center" gap={4}>
          <Avatar
            size={20}
            bd="1px solid orange.6"
            bg="orange.0"
          >
            <Text fw={800} size="xs" c="orange.6">
              {row.agent.charAt(0).toUpperCase()}
            </Text>
          </Avatar>
          {row.agent}
        </Flex>
      </MUITable.Td>
      <MUITable.Td>
        <Flex align="center" gap={4}>
          {row.browser === 'Chrome' &&
            <Paper radius="50%" bg="orange.2" h={20} w={20}>
              <Text c="orange.6">
                <IconBrandChrome size={20} />
              </Text>
            </Paper>
          }

          {row.browser === 'Edge' &&
            <Paper radius="50%" bg="blue.2" h={20} w={20}>
              <Text c="blue.6">
                <IconBrandEdge size={20} />
              </Text>
            </Paper>
          }

          {row.browser === 'Safari' &&
            <Paper radius="50%" bg="blue.3" h={20} w={20}>
              <Text c="blue.5">
                <IconBrandSafari size={20} />
              </Text>
            </Paper>
          }

          {row.browser === 'Firefox' &&
            <Paper radius="50%" bg="orange.3" h={20} w={20}>
              <Text c="orange.7">
                <IconBrandFirefox size={20} />
              </Text>
            </Paper>
          }

          {row.browser === 'Opera' &&
            <Paper radius="50%" bg="red.1" h={20} w={20}>
              <Text c="red.6">
                <IconBrandOpera size={20} />
              </Text>
            </Paper>
          }

          {row.browser}
        </Flex>
      </MUITable.Td>
      <MUITable.Td>{row.time}</MUITable.Td>
      <MUITable.Td>
        <Button
          size="compact-xs"
          onClick={onView}
        >
          View
        </Button>
      </MUITable.Td>
    </MUITable.Tr>
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
      <MUITable horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <MUITable.Tbody>
          <MUITable.Tr
            bg="neutral.1"
            style={{
              borderBottom: '1px solid var(--mantine-color-neutral-4)',
            }}
          >
            <TableHeader
              sorted={sortBy === 'status'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('status')}
              w={150}
            >
              Status
            </TableHeader>
            <TableHeader
              sorted={sortBy === 'visitor'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('visitor')}
              w={300}
            >
              Visitor
            </TableHeader>
            <TableHeader
              sorted={sortBy === 'agent'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('agent')}
              w={300}
            >
              Agent
            </TableHeader>

            <TableHeader
              sorted={sortBy === 'browser'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('browser')}
              w={180}
            >
              Browser
            </TableHeader>

            <TableHeader
              sorted={sortBy === 'time'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('time')}
              w={100}
            >
              Time
            </TableHeader>
            <TableHeader w={100}>
              Actions
            </TableHeader>
          </MUITable.Tr>
        </MUITable.Tbody>
        <MUITable.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <MUITable.Tr>
              <MUITable.Td
                colSpan={Object.keys(data[0]).length}
                px={0}
              >
                <Paper bg="neutral.1" p="sm">
                    <EmptyPlaceholder
                      title="No Result Found."
                      description="Your search has returned 0 record."
                    />
                </Paper>
              </MUITable.Td>
            </MUITable.Tr>
          )}
        </MUITable.Tbody>
      </MUITable>
    </ScrollArea>
  );
}
