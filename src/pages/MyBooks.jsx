import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import { RenderIf } from "@/components/elements/RenderIf";
import { SearchBook } from "@/components/elements/search";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { LoadingScreen } from "@/components/templates/loadingScreen/LoadingScreen";
import UserContext from "@/contexts/userContext";
import { useFetch } from "@/utils/hooks/useFetch";
import { useFilteredBooks } from "@/utils/hooks/useFilteredBooks";
import { useRole } from "@/utils/hooks/useRole";
import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export function MyBooks() {
  useRole("USER");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(UserContext);
  const [bookOpened, setBookOpened] = useState({});

  const { error, isLoading, data: booksData } = useFetch("/books");

  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (!booksData?.data?.books) return;
    setBooks(booksData.data.books.reverse());
  }, [booksData]);

  // filters
  const [searchFilter, setSearchFilter] = useState("");
  const [availibilityFilter, setAvailibilityFilter] = useState("ShowAll");
  const [genreFilter, setGenreFilter] = useState("All Genres");

  const filteredUserBooks = useMemo(() => {
    return books.filter((book) => book.borrowerIds.includes(user?.id));
  }, [books, user]);

  const filteredBooks = useFilteredBooks(
    filteredUserBooks,
    searchFilter,
    availibilityFilter,
    genreFilter,
  );

  return (
    <>
      <LoadingScreen when={isLoading} text="Getting Books" />

      <DefaultLayout>
        <Box bg="gray.100" w="100%">
          <Container maxWidth="6xl" p={5}>
            <Text as="h1" fontSize="2xl" mb={4}>
              Hi {user?.name}, here is your borrowed books
            </Text>
            <SearchBook
              searchValue={searchFilter}
              setSearchValue={setSearchFilter}
              availibilityValue={availibilityFilter}
              setAvailibilityValue={setAvailibilityFilter}
              genreValue={genreFilter}
              setGenreValue={setGenreFilter}
            />
            <BookList
              error={error}
              isLoading={isLoading}
              books={filteredBooks}
              onOpen={onOpen}
              setBookOpened={setBookOpened}
            >
              {" "}
            </BookList>

            <RenderIf when={filteredUserBooks?.length === 0}>
              <HStack spacing="4px" mt={8} w="full" justifyContent="center">
                <Text textAlign="center">You have no books yet, lets</Text>
                <Link to="/">
                  <Button variant="link" fontWeight="normal" colorScheme="blue">
                    borrow some books
                  </Button>
                </Link>
              </HStack>
            </RenderIf>

            <RenderIf
              when={
                filteredUserBooks?.length > 0 && filteredBooks?.length === 0
              }
            >
              <HStack spacing="4px" mt={8} w="full" justifyContent="center">
                <Text textAlign="center">
                  Can&apos;t find book with search query:{" "}
                  <b>&quot;{searchFilter}&quot;</b>, avalibility:{" "}
                  <b>{availibilityFilter}</b>, and genres: <b>{genreFilter}</b>
                </Text>
              </HStack>
            </RenderIf>
          </Container>
        </Box>
      </DefaultLayout>

      <BookModal
        isOpen={isOpen}
        onClose={onClose}
        bookOpened={bookOpened}
        showActionButton
        books={books}
        setBooks={setBooks}
      />
    </>
  );
}
