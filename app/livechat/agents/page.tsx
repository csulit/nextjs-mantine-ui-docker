'use client';

import { Card, Flex, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DashboardStats from '@/components/DashboardStats/DashboardStats';
import { Table } from '@/components/Table/Table';
import { chatTableDummyData } from '@/configs/default-values';
import { SideDrawer } from '@/components/SideDrawer/SideDrawer';

export default function AgentsPage() {
  const [sideDrawerOpen, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex direction="column" gap="md">
        <Title order={2}>Agents</Title>
        <DashboardStats />
        <Card>
          <Table data={chatTableDummyData} onView={open} />
        </Card>
      </Flex>
      <SideDrawer
        open={sideDrawerOpen}
        onClose={close}
        title="Chat Side Drawer"
      >
        test
      </SideDrawer>
    </>
  );
}
