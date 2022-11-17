import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useRole } from "@/utils/hooks/useRole";
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
} from "@chakra-ui/react";

export function CreateBook() {
  useRole("ADMIN");
  return (
    <DefaultLayout>
      <Container maxW="8xl" py={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Add Book
        </Text>
        <Stack my={4}>
          <InputGroup>
            <InputLeftAddon w="120px">Title</InputLeftAddon>
            <Input type="text" placeholder="" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">ISBN</InputLeftAddon>
            <Input type="text" placeholder="" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Author</InputLeftAddon>
            <Input type="text" placeholder="" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Publisher</InputLeftAddon>
            <Input type="text" placeholder="" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Image</InputLeftAddon>
            <Input type="file" accept="image/*" placeholder="" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Count</InputLeftAddon>
            <NumberInput defaultValue={1} min={1} precision={0} w="full">
              <NumberInputField borderLeftRadius={0} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon w="120px">Genres</InputLeftAddon>
            <Input type="text" placeholder="*separate using comma" />
          </InputGroup>
          <Checkbox defaultChecked>Fiction book</Checkbox>
        </Stack>
        <Button colorScheme="blue">Add this book!</Button>
      </Container>
    </DefaultLayout>
  );
}
