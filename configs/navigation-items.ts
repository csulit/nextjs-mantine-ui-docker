import { IconChartArea, IconDashboard, IconMessage } from '@tabler/icons-react';

export const NAV_ITEMS = [
  {
    id: 'dashboard',
    active: true,
    label: 'Dashboard',
    href: '/',
    icon: IconDashboard,
    child: null,
  },
  {
    id: 'livechat',
    active: false,
    label: 'Live Chat',
    href: '#livechat',
    icon: IconMessage,
    child: [
      {
        id: 'livechat-chats',
        active: false,
        label: 'Chats',
        href: '/livechat/chats',
        icon: null,
        child: null,
      },
      {
        id: 'livechat-agents',
        active: false,
        label: 'Agents',
        href: '/livechat/agents',
        icon: null,
        child: null,
      },
    ],
  },
  {
    id: 'analytics',
    active: false,
    label: 'Analytics',
    href: '#analytics',
    icon: IconChartArea,
    child: [
     {
        id: 'analytics-summary',
        active: false,
        label: 'Summary',
        href: '/analytics/summary',
        icon: null,
        child: null,
      },
      {
        id: 'analytics-chats',
        active: false,
        label: 'Chats',
        href: '/analytics/chats',
        icon: null,
        child: null,
      },
      {
        id: 'analytics-tickets',
        active: false,
        label: 'Tickets',
        href: '/analytics/tickets',
        icon: null,
        child: null,
      },
      {
        id: 'analytics-export-reports',
        active: false,
        label: 'Export reports',
        href: '/analytics/reports',
        icon: null,
        child: null,
      },
    ],
  },
];
