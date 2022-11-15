import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  Box,
  SimpleGrid,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  Container,
  Image,
  HStack,
  Input,
  Tag,
} from "@chakra-ui/react";

import React, { useState } from "react";

import useFetch from "@/useFetch";
import FilterBook from "@/components/elements/Filterbook";

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [bookOpened, setBookOpened] = useState({});

  const {
    error,
    isLoading,
    data: books,
  } = useFetch("http://13.113.187.150/books");

  const onCardClick = (book) => {
    onOpen();
    setBookOpened(book);
  };

  return (
    <DefaultLayout>
      <Box bg="gray.100" w="100%">
        <Container maxWidth="6xl" p={5}>
          <HStack>
            <Input placeholder="Search" m={2} borderColor="blue.600" />
            <FilterBook />
          </HStack>
          <SimpleGrid columns={4} minChildWidth="250px" spacing={5}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {books &&
              books.data.books.map((book) => (
                <Box
                  onClick={() => onCardClick(book)}
                  cursor="pointer"
                  bg="white"
                  width="100%"
                  key={book._id}
                >
                  <Box w="100%" bg="red.100">
                    <Image
                      w="100%"
                      objectFit="cover"
                      src={book?.imageUrl}
                      alt={book?.title}
                    />
                  </Box>
                  <Box w="160px" m={3}>
                    <Text>{book.title}</Text>
                    <Text fontSize="12">{book.author}</Text>
                  </Box>
                </Box>
              ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader> Book Details </ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Image
              w="100%"
              borderRadius="xl"
              src={bookOpened?.imageUrl}
              alt=""
            />
            <Text marginTop={7} fontSize="24">
              {bookOpened?.title}
            </Text>
            <Text marginBottom={2} fontSize="14" color="teal">
              {bookOpened?.author} • {bookOpened?.publisher}
            </Text>
            <HStack mt={3} mb={1}>
              {bookOpened?.genres?.map((genre) => (
                <Tag size="sm"> {genre} </Tag>
              ))}
            </HStack>

            <Text fontSize="16">{bookOpened.synopsis}</Text>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              colorScheme="teal"
              width="100%"
              onClick={() =>
                toast({
                  title: "Borrowed",
                  description: "Book saved into My library.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Borrow
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
