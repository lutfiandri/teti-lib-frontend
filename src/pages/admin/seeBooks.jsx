import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Text,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { HiMagnifyingGlass, HiPlus } from "react-icons/hi2";

export function SeeBooks() {
  return (
    <DefaultLayout>
      <Container maxW="8xl" py={8}>
        <HStack justifyContent="space-between">
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Books
          </Text>
          <HStack w="full" maxW="500px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <HiMagnifyingGlass st />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
            <Button
              leftIcon={<HiPlus />}
              colorScheme="blue"
              variant="solid"
              px={8}
            >
              Add Book
            </Button>
          </HStack>
        </HStack>
        <TableContainer
          border="1px"
          borderColor="gray.300"
          p={4}
          borderRadius="xl"
          my={4}
        >
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>ISBN</Th>
                <Th>Author</Th>
                <Th>Publisher</Th>
                <Th>Books Available</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Jujutsu kaisen</Td>
                <Td>1234ljk2l34</Td>
                <Td>Lutfi Andriyanto</Td>
                <Td>mappa</Td>
                <Td>12/20</Td>
                <Td>
                  <HStack>
                    <Button size="sm" colorScheme="blue">
                      Detail
                    </Button>
                    <Button size="sm" colorScheme="green">
                      Edit
                    </Button>
                    <Button size="sm" colorScheme="red">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>Jujutsu kaisen</Td>
                <Td>1234ljk2l34</Td>
                <Td>Lutfi Andriyanto</Td>
                <Td>mappa</Td>
                <Td>12/20</Td>
                <Td>
                  <HStack>
                    <Button size="sm" colorScheme="blue">
                      Detail
                    </Button>
                    <Button size="sm" colorScheme="green">
                      Edit
                    </Button>
                    <Button size="sm" colorScheme="red">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>Jujutsu kaisen</Td>
                <Td>1234ljk2l34</Td>
                <Td>Lutfi Andriyanto</Td>
                <Td>mappa</Td>
                <Td>12/20</Td>
                <Td>
                  <HStack>
                    <Button size="sm" colorScheme="blue">
                      Detail
                    </Button>
                    <Button size="sm" colorScheme="green">
                      Edit
                    </Button>
                    <Button size="sm" colorScheme="red">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </DefaultLayout>
  );
}
