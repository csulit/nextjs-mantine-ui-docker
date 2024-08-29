'use client';

import { Button, Flex, Paper, Text } from '@mantine/core';
import { H1, H2, H3, H4, H5, H6 } from '@/components/Headings/Headings';

export default function CoreComponentsPage() {
  return (
    <Flex direction="column" gap="md">
      <H1>Core Components</H1>

      <Flex direction="column" gap="sm">
        <H3>HEADINGS</H3>
        <Paper>
          <Flex direction="column" p="md" gap="md">
            <Flex direction="column">
              <H1>Heading 1</H1>
              <Text c="neutral.8">
                {'<H1>Heading 1</H1>'}
              </Text>
            </Flex>

            <Flex direction="column">
              <H2>Heading 2</H2>
              <Text c="neutral.8">
                {'<H2>Heading 2</H2>'}
              </Text>
            </Flex>

            <Flex direction="column">
              <H3>Heading 3</H3>
              <Text c="neutral.8">
                {'<H3>Heading 3</H3>'}
              </Text>
            </Flex>

            <Flex direction="column">
              <H4>Heading 4</H4>
              <Text c="neutral.8">
                {'<H4>Heading 4</H4>'}
              </Text>
            </Flex>

            <Flex direction="column">
              <H5>Heading 5</H5>
              <Text c="neutral.8">
                {'<H5>Heading 5</H5>'}
              </Text>
            </Flex>

            <Flex direction="column">
              <H6>Heading 6</H6>
              <Text c="neutral.8">
                {'<H6>Heading 6</H6>'}
              </Text>
            </Flex>

          </Flex>
        </Paper>
      </Flex>

      <Flex direction="column" gap="sm">
        <H3>Buttons</H3>
        <Paper>
          <Flex direction="column" p="md" gap="md">
            <Flex gap="sm">
              <Button>Primary</Button>
              <Button variant="outline">Outlined</Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="transparent">Transparent</Button>
            </Flex>

            <Flex gap="sm">
              <Button color="neutral">Neutral</Button>
              <Button color="neutral" variant="outline">Outlined</Button>
              <Button color="neutral" variant="subtle">Subtle</Button>
              <Button color="neutral" variant="transparent">Transparent</Button>
            </Flex>

            <Flex gap="sm">
              <Button color="blue">Blue</Button>
              <Button color="blue" variant="outline">Outlined</Button>
              <Button color="blue" variant="subtle">Subtle</Button>
              <Button color="blue" variant="transparent">Transparent</Button>
            </Flex>

            <Flex gap="sm">
              <Button color="red">Blue</Button>
              <Button color="red" variant="outline">Outlined</Button>
              <Button color="red" variant="subtle">Subtle</Button>
              <Button color="red" variant="transparent">Transparent</Button>
            </Flex>

            <Flex gap="sm">
              <Button color="green">Blue</Button>
              <Button color="green" variant="outline">Outlined</Button>
              <Button color="green" variant="subtle">Subtle</Button>
              <Button color="green" variant="transparent">Transparent</Button>
            </Flex>

            <Flex gap="sm">
              <Button color="yellow">Blue</Button>
              <Button color="yellow" variant="outline">Outlined</Button>
              <Button color="yellow" variant="subtle">Subtle</Button>
              <Button color="yellow" variant="transparent">Transparent</Button>
            </Flex>
          </Flex>
        </Paper>
      </Flex>

    </Flex>
  );
}
