import { Center, Flex, Loader } from '@mantine/core';

export default function PublicLivechatLoader() {
  return (
    <Center h="100vh">
      <Flex justify="center" align="center">
        <Loader size={30} />
      </Flex>
    </Center>
  );
}
