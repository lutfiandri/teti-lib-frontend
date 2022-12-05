import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import FilterBook from "@/components/elements/Filterbook";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import UserContext from "@/contexts/userContext";
import { useFetch } from "@/utils/hooks/useFetch";
import { useRole } from "@/utils/hooks/useRole";
import { createFetcher } from "@/utils/services/fetcher";
import {
  Box,
  Container,
  HStack,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useContext, useMemo, useState } from "react";

export function MyBooks() {
  useRole("USER");

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(UserContext);

  const [bookOpened, setBookOpened] = useState({});
  const [query, setQuery] = useState("");

  const { error, isLoading, data: booksData } = useFetch("/books");

  const books = useMemo(() => booksData?.data?.books || [], [booksData]);

  const returnBookHandler = async (book) => {
    try {
      const fetcher = createFetcher();

      const res = await fetcher.put("/borrows/return", { bookId: book._id });
      toast({
        title: "Returned",
        description: "Book successfully returned.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // TODO: re fetch after returning
    } catch (error) {
      toast({
        title: "Error",
        description: "Error Happened",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error(error);
    }
  };

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => book.borrowerIds.includes(user?.id))
      .filter((books) => {
        if (query === "") {
          return true;
        } else if (
          books.title.toLowerCase().includes(query.toLowerCase()) ||
          books.author.toLowerCase().includes(query.toLowerCase()) ||
          books.publisher.toLowerCase().includes(query.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
  }, [user, books]);

  return (
    <DefaultLayout>
      <Box bg="gray.100" w="100%">
        <Container maxWidth="6xl" p={5}>
          <HStack>
            <Input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              borderColor="blue.600"
            />
            <FilterBook />
          </HStack>
          <BookList
            error={error}
            isLoading={isLoading}
            books={filteredBooks}
            onOpen={onOpen}
            setBookOpened={setBookOpened}
          >
            {" "}
          </BookList>
        </Container>
      </Box>
      <BookModal
        isOpen={isOpen}
        onClose={onClose}
        bookOpened={bookOpened}
        actionButtonText="Return"
        actionButtonHandler={async () => await returnBookHandler(bookOpened)}
      ></BookModal>
    </DefaultLayout>
  );
}
