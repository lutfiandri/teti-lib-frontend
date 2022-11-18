import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Box, useDisclosure, Container, HStack, Input } from "@chakra-ui/react";

import React, { useMemo, useState } from "react";

import { useFetch } from "@/utils/hooks/useFetch";
import FilterBook from "@/components/elements/Filterbook";
import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookOpened, setBookOpened] = useState({});

  const { error, isLoading, data: booksData } = useFetch("/books");

  const books = useMemo(() => booksData?.data?.books || [], [booksData]);

  const [query, setQuery] = useState("");

  return (
    <DefaultLayout>
      <Box bg="gray.100" w="100%">
        <Container maxWidth="6xl" p={5}>
          <HStack>
            <Input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              m={2}
              borderColor="blue.600"
            />
            <FilterBook />
          </HStack>
          <BookList
            error={error}
            isLoading={isLoading}
            books={books}
            onOpen={onOpen}
            query={query}
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
