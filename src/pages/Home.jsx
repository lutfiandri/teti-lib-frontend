import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import { RenderIf } from "@/components/elements/RenderIf";
import { SearchBook } from "@/components/elements/search";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { LoadingScreen } from "@/components/templates/loadingScreen/LoadingScreen";
import { useFetch } from "@/utils/hooks/useFetch";
import { useFilteredBooks } from "@/utils/hooks/useFilteredBooks";
import { useRole } from "@/utils/hooks/useRole";
import { Box, Container, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Home() {
  useRole();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { error, isLoading, data: booksData } = useFetch("/books");
  const [bookOpened, setBookOpened] = useState({});

  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (!booksData?.data?.books) return;
    setBooks(booksData.data.books.reverse());
  }, [booksData]);

  // filters
  const [searchFilter, setSearchFilter] = useState("");
  const [availibilityFilter, setAvailibilityFilter] = useState("ShowAll");
  const [genreFilter, setGenreFilter] = useState("All Genres");

  const filteredBooks = useFilteredBooks(
    books,
    searchFilter,
    availibilityFilter,
    genreFilter,
  );

  return (
    <>
      <LoadingScreen when={isLoading} text="Getting Books" />

      <DefaultLayout>
        <Box bg="gray.100" w="100%">
          <Container maxWidth="8xl" py={5}>
            <Text as="h1" fontSize="2xl" mb={4}>
              Need some books? Here we go...
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
            />

            <RenderIf when={filteredBooks?.length === 0}>
              <HStack spacing="4px" mt={8} w="full" justifyContent="center">
                <Text textAlign="center">
                  No books yet here, ask admin to add books.
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
