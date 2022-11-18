import { createFetcher } from "@/utils/services/fetcher";
import {
  Button,
  HStack,
  Image,
  Modal,
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

const BookModal = ({ isOpen, onClose, bookOpened }) => {
  const toast = useToast();

  const borrowHandler = async () => {
    try {
      const fetcher = createFetcher();

      const res = await fetcher.post("/borrows", { bookId: bookOpened._id });
      toast({
        title: "Borrowed",
        description: "Book saved into My Books.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {}
  };

  return (
    <div>
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
              {bookOpened?.genres?.map((genre, index) => (
                <Tag size="sm" key={index}>
                  {genre}
                </Tag>
              ))}
            </HStack>

            <Text fontSize="16">{bookOpened?.synopsis}</Text>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button colorScheme="teal" width="100%" onClick={borrowHandler}>
              Borrow
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookModal;
