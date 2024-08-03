'use client';

import { NavLink } from '@mantine/core';
import Link from 'next/link';
import { defaultValues } from '@/configs/default-values';

interface NavItemProps {
  item: {
    id: string;
    active: boolean;
    label: string;
    href: string;
    leftSection: React.ReactNode;
    child?: NavItemProps['item'][] | null;
  };
}

export function NavItem({ item }: NavItemProps) {
  const {
    NAVBAR_PARENT_LABEL_FONT_SIZE,
    NAVBAR_PARENT_LABEL_FONT_WEIGHT,
    NAVBAR_CHILD_LABEL_FONT_SIZE,
  } = defaultValues;

  if (item.child?.length) {
    return (
      <NavLink
        key={item.id}
        c={{ dark: 'dimmed' }}
        active={item.active}
        href={item.href}
        label={item.label}
        childrenOffset={28}
        leftSection={item.leftSection}
        styles={{
          label: {
            fontSize: NAVBAR_PARENT_LABEL_FONT_SIZE,
            fontWeight: NAVBAR_PARENT_LABEL_FONT_WEIGHT,
          },
        }}
      >
        {item.child.map((childItem) => (
          <NavItem key={childItem.id} item={childItem} />
        ))}
      </NavLink>
    );
  }

  return (
    <NavLink
      key={item.id}
      c={{ dark: 'dimmed' }}
      active={item.active}
      href={item.href}
      label={item.label}
      component={Link}
      leftSection={item.leftSection}
      styles={{
        label: {
          fontSize: item.child ? NAVBAR_CHILD_LABEL_FONT_SIZE : NAVBAR_PARENT_LABEL_FONT_SIZE,
          fontWeight: item.child ? undefined : NAVBAR_PARENT_LABEL_FONT_WEIGHT,
        },
      }}
    />
  );
}
