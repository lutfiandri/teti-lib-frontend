import { Center, Container } from "@chakra-ui/react";
import Helmet from "react-helmet";

export function SignInLayout({ children, title = "Sign In - TETI Library" }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Center h="100vh" bg="gray.100" p={4}>
        <Container
          maxW="xl"
          bg="white"
          textAlign="center"
          shadow="md"
          borderRadius="xl"
          p={4}
        >
          {children}
        </Container>
      </Center>
    </>
  );
}
