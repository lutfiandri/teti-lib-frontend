import UserContext from "@/contexts/userContext";
import { borrowBookHandler, returnBookHandler } from "@/utils/services/borrows";
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
import { useContext } from "react";
import { useNavigate } from "react-router";
import { RenderIf } from "./RenderIf";

const BookModal = ({
  isOpen,
  onClose,
  bookOpened,
  showActionButton = false,
  books,
  setBooks,
}) => {
  const navigate = useNavigate();
  const toast = useToast();
  const { user, setUser } = useContext(UserContext);
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
            <RenderIf when={showActionButton && user && user.role === "USER"}>
              <RenderIf
                when={!user?.borrowedBookIds?.includes(bookOpened?._id)}
              >
                <Button
                  colorScheme="blue"
                  width="100%"
                  onClick={async () =>
                    await borrowBookHandler(
                      bookOpened,
                      toast,
                      onClose,
                      books,
                      setBooks,
                      user,
                      setUser,
                    )
                  }
                >
                  Borrow
                </Button>
              </RenderIf>
              <RenderIf when={user?.borrowedBookIds?.includes(bookOpened?._id)}>
                <HStack w="full">
                  <Button
                    colorScheme="blue"
                    flex={1}
                    variant="outline"
                    onClick={async () =>
                      await returnBookHandler(
                        bookOpened,
                        toast,
                        onClose,
                        books,
                        setBooks,
                        user,
                        setUser,
                      )
                    }
                  >
                    Return
                  </Button>
                  <Button colorScheme="blue" flex={2}>
                    Read
                  </Button>
                </HStack>
              </RenderIf>
            </RenderIf>
            <RenderIf when={!user}>
              <Button
                colorScheme="blue"
                width="100%"
                onClick={() => navigate("/signin")}
              >
                SignIn to borrow book ➜
              </Button>
            </RenderIf>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookModal;
