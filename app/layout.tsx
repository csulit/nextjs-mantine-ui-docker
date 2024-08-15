import React from 'react';
import { headers } from 'next/headers';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ClerkProvider } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BasicAppShell } from '@/components/AppShell/AppShell';
import { defaultValues } from '@/configs/default-values';
import { PusherContextProvider } from '@/context/Pusher/PusherContext';
import { ReactQueryProvider } from '@/context/ReactQueryProvider/ReactQueryProvider';
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { cssResolver, theme } from '../theme';

export const metadata = {
  title: 'Live Chat CMS',
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
              <MantineProvider theme={theme} cssVariablesResolver={cssResolver}>
                <Notifications />
                {userId && currentPathname !== defaultValues.PUBLIC_LIVECHAT_PATHNAME ? (
                  <BasicAppShell>{children}</BasicAppShell>
                ) : (
                  children
                )}
              </MantineProvider>
            </PusherContextProvider>
            <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} />
          </ReactQueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
