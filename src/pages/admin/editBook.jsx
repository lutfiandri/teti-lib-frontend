import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  Button,
  Checkbox,
  Container,
  HStack,
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

export function EditBook() {
  return (
    <DefaultLayout>
      <Container maxW="8xl" py={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Edit Book
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
        <HStack>
          <Button colorScheme="blue">Update</Button>
          <Button colorScheme="red">Delete</Button>
        </HStack>
      </Container>
    </DefaultLayout>
  );
}
