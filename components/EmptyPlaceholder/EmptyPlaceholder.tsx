import { Flex, Text } from '@mantine/core';
import { Icon as TblerIcon, IconFileOff, IconProps } from '@tabler/icons-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { H6 } from '../Headings/Headings';

interface EmptyPlaceholderProps {
  title: string;
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<TblerIcon>>;
  description: string;
}

export function EmptyPlaceholder({ title, Icon = IconFileOff, description }:EmptyPlaceholderProps) {
  return (
    <Flex
      h="40vh"
      align="center"
      justify="center"
    >
      <Flex direction="column" align="center">
        <Text c="neutral.4">
          <Icon size={40} />
        </Text>
        <H6 c="neutral.8">{title}</H6>
        <Text size="sm" c="neutral.7">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}
