import { Chat } from '@/types';

export const defaultValues = {
  APPSHELL_HEADER_HEIGHT: 60,
  APPSHELL_NAVBAR_WIDTH: 300,
  NAVBAR_PARENT_LABEL_FONT_SIZE: 16,
  NAVBAR_PARENT_LABEL_FONT_WEIGHT: 500,
  NAVBAR_CHILD_LABEL_FONT_SIZE: 14,
  PUBLIC_LIVECHAT_PATHNAME: '/public/livechat',
};

export const chatTableDummyData :Chat[] = [
  {
    id: '1',
    status: 'Pending',
    visitor: 'Athena Weissnat',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
  {
    id: '2',
    status: 'Active',
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
    status: 'Missed',
    visitor: 'Athena Weissnat',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
  {
    id: '5',
    status: 'Active',
    visitor: 'Athena Weissnat',
    agent: 'Krish Ramos',
    browser: 'Chrome',
    time: '11:00',
  },
];
