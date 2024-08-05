import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '../theme';
import { ReactQueryProvider } from '@/context/ReactQueryProvider/ReactQueryProvider';
import { PusherContextProvider } from '@/context/Pusher/PusherContext';
import { BasicAppShell } from '@/components/AppShell/AppShell';
import { defaultValues } from '@/configs/default-values';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  const headersList = headers();
  const currentPathname = headersList.get('x-current-pathname');

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
                {userId && currentPathname !== defaultValues.PUBLIC_LIVECHAT_PATHNAME ? (
                  <BasicAppShell>{children}</BasicAppShell>
                ) : (
                  children
                )}
              </MantineProvider>
            </PusherContextProvider>
            <ReactQueryDevtools buttonPosition="top-right" initialIsOpen={false} />
          </ReactQueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
