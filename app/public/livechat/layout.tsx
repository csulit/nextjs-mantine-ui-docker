import { Container } from '@mantine/core';
import { ReactNode } from 'react';

export default function PublicLivechatLayout({ children }: { children: ReactNode }) {
  return (
    <Container size="responsive" p={0} h="100vh">
      {children}
    </Container>
  );
}
