import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Box, useDisclosure, Container, HStack, Input } from "@chakra-ui/react";

import React, { useContext, useMemo, useState } from "react";

import { useFetch } from "@/utils/hooks/useFetch";
import FilterBook from "@/components/elements/Filterbook";
import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import UserContext from "@/contexts/userContext";
import { useRole } from "@/utils/hooks/useRole";

export function MyBooks() {
  useRole("USER");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(UserContext);

  const [bookOpened, setBookOpened] = useState({});
  const [query, setQuery] = useState("");

  const { error, isLoading, data: booksData } = useFetch("/books");

  const books = useMemo(() => booksData?.data?.books || [], [booksData]);

  const filteredBooks = useMemo(() => {
    console.log(books);
    return books
      .filter((book) => book.borrowerIds.includes(user.id))
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
      ></BookModal>
    </DefaultLayout>
  );
}
