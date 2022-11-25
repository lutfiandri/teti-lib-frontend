import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  Box,
  useDisclosure,
  Container,
  HStack,
  Input,
    useToast,
    Button,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
} from "@chakra-ui/react";

import React, { useMemo, useState } from "react";

import { useFetch } from "@/utils/hooks/useFetch";
import FilterBook from "@/components/elements/Filterbook";
import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";
import { createFetcher } from "@/utils/services/fetcher";
import { useEffect } from 'react';

export function Home() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookOpened, setBookOpened] = useState({});
    const [query, setQuery] = useState("");
    const [availibilityFilter, setAvailibilityFilter] = useState("ShowAll");
    const [genreFilter, setGenreFilter] = useState("All Genres");

  const { error, isLoading, data: booksData } = useFetch("/books");

  const books = useMemo(() => booksData?.data?.books || [], [booksData]);

  const filteredBooks = useMemo(() => {
      return books.filter((book) => {
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
      }).filter((book) => {
          if (availibilityFilter === "ShowAll") {
              return true;
          } else if (availibilityFilter === "ShowAvailable") {
              return book.numOfAvailableBooks > 0;
          } 
      }).filter((book) => {
          if (genreFilter === "All Genres") {
              return true;
          } else if (genreFilter === "Fiction") {
              return book.isFiction;
          } else if (genreFilter === "nonFiction") {
              return !book.isFiction;
          }
      }
      );
  }, [books, query, availibilityFilter, genreFilter]);

    useEffect(() => {
        console.log(filteredBooks);
    }, [filteredBooks])

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
            <Box>
                      <Menu closeOnSelect={false}>
                          <MenuButton as={Button} colorScheme="blue" m={2}>
                              Filter
                          </MenuButton>
                          <MenuList minWidth="240px">
                                  <MenuOptionGroup onChange={setAvailibilityFilter} value={availibilityFilter} defaultValue="ShowAll" title="Availability" type="radio">
                                      <MenuItemOption value="ShowAll">Show All</MenuItemOption>
                                      <MenuItemOption value="ShowAvailable">Show Available</MenuItemOption>
                              </MenuOptionGroup>
                              <MenuDivider />
                                  <MenuOptionGroup onChange={setGenreFilter} value={genreFilter} defaultValue="All Genres" title="Genre" type="radio">
                                      <MenuItemOption value="All Genres">All Genres</MenuItemOption>
                                      <MenuItemOption value="Fiction">Fiction</MenuItemOption>
                                      <MenuItemOption value="nonFiction">Non Fiction</MenuItemOption>
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
        actionButtonText="Borrow"
        actionButtonHandler={async () => await borrowBookHandler(bookOpened)}
      ></BookModal>
    </DefaultLayout>
  );
}
