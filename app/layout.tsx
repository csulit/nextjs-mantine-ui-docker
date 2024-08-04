import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '../theme';
import { ReactQueryProvider } from '@/context/ReactQueryProvider/ReactQueryProvider';
import { PusherContextProvider } from '@/context/Pusher/PusherContext';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ClerkProvider>
          <ReactQueryProvider>
            <PusherContextProvider>
              <MantineProvider theme={theme}>
                <Notifications />
                {children}
              </MantineProvider>
            </PusherContextProvider>
            <ReactQueryDevtools buttonPosition="top-right" initialIsOpen={false} />
          </ReactQueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
