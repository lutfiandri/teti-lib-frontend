import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useRole } from "@/utils/hooks/useRole";
import { createFetcher } from "@/utils/services/fetcher";
import { uploadImage } from "@/utils/services/imagekit/uploadImage";
import {
  Button,
  Checkbox,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export function CreateBook() {
  useRole("ADMIN");

  const formRef = useRef();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const resetInput = (form) => {
    // console.log(form.count);
    form.title.value = "";
    form.isbn.value = "";
    form.author.value = "";
    form.publisher.value = "";
    form.isFiction.checked = false;
    form.synopsis.value = "";
    form.count.value = "1";
    form.genres.value = "";
    form.image.value = "";
  };

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const form = formRef.current;

      const imageFile = form.image.files[0];
      const imageUrl = await uploadImage(imageFile, form.title.value);

      const genres = form.genres.value
        .split(",")
        .map((genre) => genre.trim().toLowerCase());

      const book = {
        title: form.title.value,
        isbn: form.isbn.value,
        author: form.author.value,
        publisher: form.publisher.value,
        isFiction: form.isFiction.checked,
        synopsis: form.synopsis.value,
        numOfBooks: Number(form.count.value),
        imageUrl: imageUrl,
        genres: genres,
      };

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

      resetInput(form);
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
    <DefaultLayout>
      <Container maxW="8xl" py={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Add Book
        </Text>
        <Stack as="form" ref={formRef} my={4}>
          <InputGroup>
            <InputLeftAddon w="120px">Title</InputLeftAddon>
            <Input type="text" name="title" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">ISBN</InputLeftAddon>
            <Input type="text" name="isbn" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Synopsis</InputLeftAddon>
            <Textarea h="120px" borderLeftRadius={0} name="synopsis" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Author</InputLeftAddon>
            <Input type="text" name="author" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Publisher</InputLeftAddon>
            <Input type="text" name="publisher" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Image</InputLeftAddon>
            <Input type="file" accept="image/*" name="image" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Count</InputLeftAddon>
            <NumberInput defaultValue={1} min={1} precision={0} w="full">
              <NumberInputField borderLeftRadius={0} name="count" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Genres</InputLeftAddon>
            <Input
              type="text"
              placeholder="*separate using comma"
              name="genres"
            />
          </InputGroup>
          <Checkbox name="isFiction">Fiction book</Checkbox>
        </Stack>
        <Button colorScheme="blue" onClick={submitHandler} disabled={isLoading}>
          Add this book!
        </Button>
      </Container>
    </DefaultLayout>
  );
}
