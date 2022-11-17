import {
  Button,
  HStack,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";

const BookModal = (bookOpened) => {
  const toast = useToast();

  return (
    <div>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalHeader> Book Details </ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody>
          <Image
            w="100%"
            borderRadius="xl"
            src={bookOpened?.bookOpened?.imageUrl}
            alt=""
          />
          <Text marginTop={7} fontSize="24">
            {bookOpened?.bookOpened?.title}
          </Text>
          <Text marginBottom={2} fontSize="14" color="teal">
            {bookOpened?.bookOpened?.author} •{" "}
            {bookOpened?.bookOpened?.publisher}
          </Text>
          <HStack mt={3} mb={1}>
            {bookOpened?.bookOpened?.genres?.map((genre, index) => (
              <Tag size="sm" key={index}>
                {genre}
              </Tag>
            ))}
          </HStack>

          <Text fontSize="16">{bookOpened?.bookOpened?.synopsis}</Text>
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
    </div>
  );
};

export default BookModal;
