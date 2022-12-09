import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { LoadingScreen } from "@/components/templates/loadingScreen/LoadingScreen";
import { useFetch } from "@/utils/hooks/useFetch";
import { useRole } from "@/utils/hooks/useRole";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

export function Home() {
  useRole();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookOpened, setBookOpened] = useState({});
  const [query, setQuery] = useState("");
  const [availibilityFilter, setAvailibilityFilter] = useState("ShowAll");
  const [genreFilter, setGenreFilter] = useState("All Genres");

  const { error, isLoading, data: booksData } = useFetch("/books");

  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (!booksData?.data?.books) return;
    setBooks(booksData.data.books.reverse());
  }, [booksData]);

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        if (query === "") {
          return true;
        } else if (
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()) ||
          book.publisher.toLowerCase().includes(query.toLowerCase())
        ) {
          return true;
        }
        // return false;
      })
      .filter((book) => {
        if (availibilityFilter === "ShowAll") {
          return true;
        } else if (availibilityFilter === "ShowAvailable") {
          return book.numOfAvailableBooks > 0;
        }
      })
      .filter((book) => {
        if (genreFilter === "All Genres") {
          return true;
        } else if (genreFilter === "Fiction") {
          return book.isFiction;
        } else if (genreFilter === "nonFiction") {
          return !book.isFiction;
        }
      });
  }, [books, query, availibilityFilter, genreFilter]);

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
              {/* <FilterBook /> */}
              <Box>
                <Menu closeOnSelect={false}>
                  <MenuButton as={Button} colorScheme="blue" m={2}>
                    Filter
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup
                      onChange={setAvailibilityFilter}
                      value={availibilityFilter}
                      defaultValue="ShowAll"
                      title="Availability"
                      type="radio"
                    >
                      <MenuItemOption value="ShowAll">Show All</MenuItemOption>
                      <MenuItemOption value="ShowAvailable">
                        Show Available
                      </MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup
                      onChange={setGenreFilter}
                      value={genreFilter}
                      defaultValue="All Genres"
                      title="Genre"
                      type="radio"
                    >
                      <MenuItemOption value="All Genres">
                        All Genres
                      </MenuItemOption>
                      <MenuItemOption value="Fiction">Fiction</MenuItemOption>
                      <MenuItemOption value="nonFiction">
                        Non Fiction
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Box>
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
