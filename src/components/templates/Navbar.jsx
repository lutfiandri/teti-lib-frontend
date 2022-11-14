import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from "react";

export function Navbar() {

  const[display, setDisplay] = useState('none')

  return (
    <Box as="header" bg="blackAlpha.50">
      <Container as="nav" maxW="8xl">
        <HStack justifyContent="space-between" py={2}>
          <Button colorScheme="teal" variant="ghost">
            <Text fontWeight="bold" pr={1}>TETI</Text>
            <Text fontWeight="normal" pr={1}>LIBRARY</Text>
          </Button>
          <HStack display={['none','flex']}>
            <Button colorScheme="teal" variant="ghost" p={4}>
              Home
            </Button>
            <Button colorScheme="teal" variant="ghost" p={4}>
              My Books
            </Button>
          </HStack>

          <HStack>
            <Button colorScheme="teal" variant="solid" p={4}>
              Sign In
            </Button>
            <Button colorScheme="teal" variant="solid" p={4}>
              Sign Up
            </Button>

            <IconButton
            aria-label="Open Menu"
            colorScheme="teal"
            size="md"
            mr={2}
            icon={<HamburgerIcon/>}
            display={['flex', 'none']}
            onClick={() => setDisplay('flex')}
            />

          </HStack>
        </HStack>
      </Container>

      <Flex
        w="100vw"
        bgColor="whiteAlpha.800"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={4}
            mr={4}
            aria-labels="Close Menu"
            size="md"
            icon={<CloseIcon />}
            onClick={() => setDisplay('none')}
          />
        </Flex>
        <Flex
            flexDir="column"
            align="center"
          >
            <Button colorScheme="teal" variant="ghost" p={4}>
              Home
            </Button>
            <Button colorScheme="teal" variant="ghost" p={4}>
              My Books
            </Button>
        </Flex>

      </Flex>

    </Box>
  );
}
