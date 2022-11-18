import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Button, Center, Box, Text, Container, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export function ErrorPage({
  statusCode = "500",
  status = "Internal Server Error",
}) {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="errorbox">
        <Center h="100vh" bg="gray.100" p={4}>
          <Container
            maxW="xl"
            bg="white"
            textAlign="center"
            shadow="md"
            borderRadius="xl"
            p={4}
          >
            <Text as="h1" fontSize="4xl" fontWeight="bold">
              {statusCode}
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              {status}
            </Text>
            <Center mt={5} mb={5}>
              <Box
                borderBottom="1px"
                borderBottomColor="gray.300"
                w="62%"
              ></Box>
            </Center>
            <Stack direction="row" justifyContent="center">
              <Button
                colorScheme="blue"
                minW="30%"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Button
                colorScheme="blue"
                minW="30%"
                onClick={() => navigate("/")}
                variant="outline"
              >
                Home
              </Button>
            </Stack>
          </Container>
        </Center>
      </div>
    </DefaultLayout>
  );
}
