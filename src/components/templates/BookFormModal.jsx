import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Stack,
  Center,
  Image,
  Text,
  Box,
  useNumberInput,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  DecimalNumberInput,
  SelectOptionInput,
  TextAreaInput,
  TextInput,
} from "@/components/elements/Input";
import { ImageUpload } from "../elements/ImageUpload";
import { createFetcher } from "@/utils/services/fetcher";

export function BookFormModal({ isOpen, onClose, setRefreshSignal }) {
  const formRef = useRef();
  const toast = useToast();

  const [imageUrl, setImageUrl] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addBookHandler = async () => {
    try {
      setIsLoading(true);
      const form = formRef.current;

      const genres = form.genres.value
        .split(",")
        .map((genre) => genre.trim().toLowerCase());

      const book = {
        title: form.title.value,
        author: form.author.value,
        publisher: form.publisher.value,
        isFiction: form.isFiction.value === "Fiction",
        synopsis: form.synopsis.value,
        numOfBooks: Number(form.count.value),
        imageUrl: imageUrl,
        genres: genres,
      };

      if (
        !book.title ||
        !book.author ||
        !book.publisher ||
        !book.synopsis ||
        !book.imageUrl
      ) {
        toast({
          title: "Error",
          description:
            "Title, Author, Publisher, Synopsis, and Image is required",
          status: "error",
          duration: 5000,
          isClosable: true,
        });

        return;
      }

      const fetcher = createFetcher();

      const res = await fetcher.post("/books", book);
      if (!res.data.success) throw new Error(res.data.error);

      toast({
        title: "Success",
        description: `${book.title} added to tetilib`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setRefreshSignal((s) => !s);

      onClose();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something happened",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size="4xl"
      scrollBehavior="inside"
      closeOnOverlayClick={false}
    >
      <ModalOverlay bg="blackAlpha.50" backdropFilter="blur(2px)" />
      <ModalContent>
        <ModalHeader>Add Book</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4} direction={{ base: "column-reverse", md: "row" }}>
            <Center flex={2} py={{ base: 0, md: 8 }}>
              <ImageUpload
                setIsImageLoading={setIsImageLoading}
                setImageUrl={setImageUrl}
              />
            </Center>
            <Stack flex={3} as="form" spacing={4} ref={formRef}>
              <TextInput title="Title" name="title" />
              <TextAreaInput title="Synopsis" name="synopsis" />
              <TextInput title="Author" name="author" />
              <TextInput title="Publisher" name="publisher" />
              <DecimalNumberInput title="Count" name="count" />
              <TextInput title="Genres" name="genres" />
              <SelectOptionInput
                title="Fiction/Non-Fiction"
                name="isFiction"
                options={["Fiction", "Non-Fiction"]}
              />
            </Stack>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            w="full"
            onClick={addBookHandler}
            disabled={isImageLoading || isLoading}
          >
            Add this book
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
