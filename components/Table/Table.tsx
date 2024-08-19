import {
  ScrollArea,
  Table as MUITable,
  Text,
  TextInput,
  keys,
  rem,
  Button,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import Status from '../Status/Status';
import { TableHeader } from './TableHeader';
import { theme } from '@/theme';

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
      <MUITable.Td><Status status={row.status} label={row.status} /></MUITable.Td>
      <MUITable.Td>{row.visitor}</MUITable.Td>
      <MUITable.Td>{row.agent}</MUITable.Td>
      <MUITable.Td>{row.browser}</MUITable.Td>
      <MUITable.Td>{row.time}</MUITable.Td>
      <MUITable.Td>
        <Button
          size="compact-xs"
          bg={theme.other?.orange600}
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
          <MUITable.Tr>
            <TableHeader
              sorted={sortBy === 'status'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('status')}
            >
              Status
            </TableHeader>
            <TableHeader
              sorted={sortBy === 'visitor'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('visitor')}
            >
              Visitor
            </TableHeader>
            <TableHeader
              sorted={sortBy === 'agent'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('agent')}
            >
              Agent
            </TableHeader>

            <TableHeader
              sorted={sortBy === 'browser'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('browser')}
            >
              Browser
            </TableHeader>

            <TableHeader
              sorted={sortBy === 'time'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('time')}
            >
              Time
            </TableHeader>
            <TableHeader>
              Actions
            </TableHeader>
          </MUITable.Tr>
        </MUITable.Tbody>
        <MUITable.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <MUITable.Tr>
              <MUITable.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </MUITable.Td>
            </MUITable.Tr>
          )}
        </MUITable.Tbody>
      </MUITable>
    </ScrollArea>
  );
}
