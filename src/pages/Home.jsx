import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import FilterBook from "@/components/elements/Filterbook";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useFetch } from "@/utils/hooks/useFetch";
import { useRole } from "@/utils/hooks/useRole";
import { Box, Container, HStack, Input, useDisclosure } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

export function Home() {
  useRole();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookOpened, setBookOpened] = useState({});
  const [query, setQuery] = useState("");

  const { error, isLoading, data: booksData } = useFetch("/books");

  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (!booksData?.data?.books) return;
    setBooks(booksData.data.books.reverse());
  }, [booksData]);

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
  }, [books, query]);

  return (
    <DefaultLayout>
      <Box bg="gray.100" w="100%">
        <Container maxWidth="8xl" py={5}>
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
        showActionButton
        books={books}
        setBooks={setBooks}
      />
    </DefaultLayout>
  );
}
