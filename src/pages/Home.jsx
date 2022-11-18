import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  Box,
  useDisclosure,
  Container,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";

import React, { useMemo, useState } from "react";

import { useFetch } from "@/utils/hooks/useFetch";
import FilterBook from "@/components/elements/Filterbook";
import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import { createFetcher } from "@/utils/services/fetcher";

export function Home() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookOpened, setBookOpened] = useState({});
  const [query, setQuery] = useState("");

  const { error, isLoading, data: booksData } = useFetch("/books");

  const books = useMemo(() => booksData?.data?.books || [], [booksData]);

  const filteredBooks = useMemo(() => {
    return books.filter((books) => {
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
  }, [books]);

  const borrowBookHandler = async (book) => {
    try {
      const fetcher = createFetcher();

      const res = await fetcher.post("/borrows", { bookId: book._id });
      toast({
        title: "Borrowed",
        description: "Book saved into My Books.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Error happened.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error(error);
    }
  };

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
        actionButtonText="Borrow"
        actionButtonHandler={async () => await borrowBookHandler(bookOpened)}
      ></BookModal>
    </DefaultLayout>
  );
}
