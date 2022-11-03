import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useFetch } from "@/utils/hooks/useFetch";
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
import { useMemo } from "react";
import { HiMagnifyingGlass, HiPlus } from "react-icons/hi2";
import { useNavigate } from "react-router";

export function SeeBooks() {
  const navigate = useNavigate();

  const { data } = useFetch("/books");

  const books = useMemo(() => data.books || [], [data]);

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
                <HiMagnifyingGlass />
              </InputLeftElement>
              <Input type="text" placeholder="Search..." />
            </InputGroup>
            <Button
              leftIcon={<HiPlus />}
              colorScheme="blue"
              variant="solid"
              px={8}
              onClick={() => navigate("/admin/books/create")}
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
              {books.map((book) => (
                <Tr key={book._id}>
                  <Td>{book.title}</Td>
                  <Td>{book.isbn}</Td>
                  <Td>{book.author}</Td>
                  <Td>{book.publisher}</Td>
                  <Td>
                    {book.numOfAvailableBooks}/{book.numOfBooks}
                  </Td>
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
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </DefaultLayout>
  );
}
