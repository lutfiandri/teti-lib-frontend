import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Search2Icon } from "@chakra-ui/icons";
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
  InputGroup,
  InputRightElement,
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
            <InputGroup>
              <Input placeholder="Search" m={2} borderColor="blue.600" />
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
          <SimpleGrid columns={4} minChildWidth="250px" spacing={5}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {books &&
              books.data.books.map((book) => (
                <Box
                  onClick={onCardClick}
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
      {/* <Box bg="white" w="190px" h="40px" m={6}>
        <Text>{book.title}</Text>
        <Text fontSize="12">{book.author}</Text>
      </Box> */}

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
            <Box borderRadius="10" bg="lightgray" h="473px" m={5}>
              <img src={bookOpened?.imageUrl} alt="" />
            </Box>
            <Text marginTop={7} fontSize="24">
              {bookOpened?.title}
            </Text>
            <Text marginBottom={2} fontSize="14" color="teal">
              {bookOpened?.author} • {bookOpened?.publisher}
            </Text>

            <Text fontSize="16">
              BOOK SYNOPSIS Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris suscipit diam in leo congue congue. Aliquam hendrerit
              eget purus a consequat. Fusce elit lectus, ornare vitae diam quis,
              cursus porta eros. Suspendisse est leo, rhoncus vel euismod nec,
              vulputate sed odio. Vestibulum varius purus erat, ac commodo leo
              hendrerit quis. Curabitur nibh dolor, euismod id nunc vitae,
              ornare mattis massa. Nulla facilisi.
            </Text>
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
