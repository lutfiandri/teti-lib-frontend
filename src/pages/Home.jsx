import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  Box,
  useDisclosure,
  Modal,
  Container,
  HStack,
  Input,
} from "@chakra-ui/react";

import React, { useState } from "react";

import useFetch from "@/useFetch";
import FilterBook from "@/components/elements/Filterbook";
import BookList from "@/components/elements/BookList";
import BookModal from "@/components/elements/BookModal";

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bookOpened, setBookOpened] = useState({});

  const {
    error,
    isLoading,
    data: books,
  } = useFetch("http://13.113.187.150/books");

  return (
    <DefaultLayout>
      <Box bg="gray.100" w="100%">
        <Container maxWidth="6xl" p={5}>
          <HStack>
            <Input placeholder="Search" m={2} borderColor="blue.600" />
            <FilterBook />
          </HStack>
          <BookList
            error={error}
            isLoading={isLoading}
            books={books}
            onOpen={onOpen}
            setBookOpened={setBookOpened}
          ></BookList>
        </Container>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <BookModal bookOpened={bookOpened}></BookModal>
      </Modal>
    </DefaultLayout>
  );
}
