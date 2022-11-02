import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { HiMagnifyingGlass } from "react-icons/hi2";

export function Navbar() {
  return (
    <Box as="header" bg="blackAlpha.50">
      <Container as="nav" maxW="6xl">
        <HStack justifyContent="space-between" py={2}>
          <Button colorScheme="teal" variant="link">
            TETI Library
          </Button>
          <InputGroup w="50%">
            <InputLeftElement pointerEvents="none">
              <HiMagnifyingGlass />
            </InputLeftElement>
            <Input type="tel" placeholder="Search Book" />
          </InputGroup>

          <HStack>
            <Button colorScheme="teal" variant="ghost" p={4}>
              Login
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
