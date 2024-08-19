import { UserButton } from '@clerk/nextjs';
import { AppShell, Flex, Affix } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { useEffect, useReducer } from 'react';
import { theme } from '@/theme';
import { NavLinks } from '../NavLinks/NavLinks';
import { NAV_ITEMS } from '@/configs/navigation-items';
import { NavAction, NavState } from '@/types/navigation.type';

const initialNavState: NavState = NAV_ITEMS;

const navReducer = (state: NavState, action: NavAction): NavState => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return state.map((navItem) => ({
        ...navItem,
        active: navItem.href === action.payload,
        child: navItem.child
          ? navItem.child.map((childItem) => ({
              ...childItem,
              active: childItem.href === action.payload,
            }))
          : null,
      }));
    default:
      return state;
  }
};

export function LayoutNavbar() {
  const [navState, dispatch] = useReducer(navReducer, initialNavState);
  const pathname = usePathname();

  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE', payload: pathname });
  }, [pathname]);

  return (
    <AppShell.Navbar bg={theme.other?.richBlack} px="xs" py="md">
      <Flex direction="column" gap="xs">
        {navState.map((navItem) => (
          <NavLinks key={navItem.id} {...navItem} />
        ))}
      </Flex>

      <Affix pb="md" pl="md" position={{ bottom: 0, left: 0 }}>
        <UserButton />
      </Affix>
    </AppShell.Navbar>
  );
}
