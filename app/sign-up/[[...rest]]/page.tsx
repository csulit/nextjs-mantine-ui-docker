import { SignUp } from '@clerk/nextjs';
import { Center, Flex } from '@mantine/core';

export default function SignInPage() {
  return (
    <Center h="100vh">
      <Flex justify="center" align="center">
        <SignUp />
      </Flex>
    </Center>
  );
}
