import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import FilterBook from "@/components/elements/Filterbook";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { LoadingScreen } from "@/components/templates/loadingScreen/LoadingScreen";
import { useFetch } from "@/utils/hooks/useFetch";
import { useRole } from "@/utils/hooks/useRole";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
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
    <>
      <LoadingScreen when={isLoading} text="Getting Books" />

      <DefaultLayout>
        <Box bg="gray.100" w="100%">
          <Container maxWidth="8xl" py={5}>
            <HStack>
              <InputGroup>
                <Input
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search"
                  borderColor="blue.600"
                  m={2}
                />
                <InputRightElement pointerEvents="none">
                  <Search2Icon
                    pointerEvents="none"
                    w={6}
                    h={8}
                    mt={4}
                    mr={4}
                    color="gray.300"
                  />
                </InputRightElement>
              </InputGroup>
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
    </>
  );
}
