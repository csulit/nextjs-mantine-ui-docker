import { Title, TitleProps } from '@mantine/core';

interface HeadingProps extends Omit<TitleProps, 'order'> {
}

export function H1({ children, ...props }: HeadingProps) {
  return (
    <Title order={1} {...props}>
      {children}
    </Title>
  );
}

export function H2({ children, ...props }: HeadingProps) {
  return (
    <Title order={2} {...props}>
      {children}
    </Title>
  );
}

export function H3({ children, ...props }: HeadingProps) {
  return (
    <Title order={3} {...props}>
      {children}
    </Title>
  );
}

export function H4({ children, ...props }: HeadingProps) {
  return (
    <Title order={4} {...props}>
      {children}
    </Title>
  );
}

export function H5({ children, ...props }: HeadingProps) {
  return (
    <Title order={5} {...props}>
      {children}
    </Title>
  );
}

export function H6({ children, ...props }: HeadingProps) {
  return (
    <Title order={6} {...props}>
      {children}
    </Title>
  );
}
