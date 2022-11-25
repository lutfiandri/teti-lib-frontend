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
} from "@chakra-ui/react";

const BookModal = ({
  isOpen,
  onClose,
  bookOpened,
  actionButtonText,
  actionButtonHandler,
}) => {
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
              {
                <Tag size="sm" textTransform="capitalize">
                  {bookOpened?.isFiction ? "Fiction" : "Non Fiction"}
                </Tag>
              }
              {bookOpened?.genres?.map((genre, index) => (
                <Tag size="sm" key={index} textTransform="capitalize">
                  {genre}
                </Tag>
              ))}
            </HStack>

            <Text fontSize="16">{bookOpened?.synopsis}</Text>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              colorScheme="teal"
              width="100%"
              onClick={actionButtonHandler}
            >
              {actionButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookModal;
