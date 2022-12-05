import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  IconButton,
  Flex,
  Center,
} from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { RenderIf } from "@/components/elements/RenderIf";
import UserContext from "@/contexts/userContext";

export function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const [display, setDisplay] = useState("none");
  const navigate = useNavigate();

  return (
    <Box as="header" bg="blue.500" textColor="white">
      <Container as="nav" maxW="8xl">
        <HStack justifyContent="space-between" py={4} minH="60px">
          <div>
            <Button
              colorScheme="white"
              variant="link"
              onClick={() => navigate("/")}
            >
              <Text fontWeight="bold" pr={1} fontSize="xl">
                TETI
              </Text>
              <Text fontWeight="normal" pr={1} fontSize="xl">
                LIBRARY
              </Text>
            </Button>
            <RenderIf when={user?.role === "USER"}>
              <Button
                colorScheme="teal"
                variant="link"
                p={4}
                py={1}
                display={{ base: "none", md: "inline-block" }}
                onClick={() => navigate("/my/books")}
              >
                My Books
              </Button>
            </RenderIf>
            <RenderIf when={user?.role === "ADMIN"}>
              <Button
                colorScheme="teal"
                variant="link"
                p={4}
                py={1}
                display={{ base: "none", md: "inline-block" }}
                onClick={() => navigate("/admin/books")}
              >
                Manage Books
              </Button>
            </RenderIf>
          </div>

          <HStack>
            <RenderIf when={!user}>
              <Button
                colorScheme="teal"
                variant="solid"
                p={4}
                size="sm"
                display={{ base: "none", md: "flex" }}
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
            </RenderIf>

            <RenderIf when={user}>
              <Text fontSize="md" display={{ base: "none", md: "flex" }}>
                {user?.email}
              </Text>
              <Button
                colorScheme="red"
                variant="solid"
                p={4}
                size="sm"
                display={{ base: "none", md: "flex" }}
                onClick={() => {
                  setUser(null);
                  localStorage.setItem("accessToken", "");

                  navigate("/signin");
                }}
              >
                Sign Out
              </Button>
            </RenderIf>

            <IconButton
              aria-label="Open Menu"
              colorScheme="teal"
              size="md"
              mr={2}
              icon={<HamburgerIcon />}
              display={{ base: "flex", md: "none" }}
              onClick={() => setDisplay("flex")}
            />
          </HStack>
        </HStack>
      </Container>

      {/* MOBILE */}
      <Flex
        w="100vw"
        bgColor="whiteAlpha.800"
        backdropFilter="blur(2px)"
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
            mt={2}
            mr={8}
            aria-labels="Close Menu"
            size="md"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center" h="full" py={8}>
          <Button
            colorScheme="teal"
            variant="link"
            onClick={() => navigate("/")}
          >
            <Text fontWeight="bold" pr={1} fontSize="xl">
              TETI
            </Text>
            <Text fontWeight="normal" pr={1} fontSize="xl">
              LIBRARY
            </Text>
          </Button>

          <RenderIf when={user?.role === "USER"}>
            <Button
              colorScheme="teal"
              variant="link"
              p={4}
              onClick={() => navigate("/my/books")}
            >
              My Books
            </Button>
          </RenderIf>

          <RenderIf when={user?.role === "ADMIN"}>
            <Button
              colorScheme="teal"
              variant="link"
              p={4}
              onClick={() => navigate("/admin/books")}
            >
              Manage Books
            </Button>
          </RenderIf>

          <Box flex={1}></Box>

          <Text>{user?.email}</Text>

          <RenderIf when={!user}>
            <Button
              colorScheme="teal"
              variant="solid"
              p={4}
              mt={2}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </RenderIf>

          <RenderIf when={user}>
            <Button
              colorScheme="red"
              variant="solid"
              p={4}
              mt={2}
              onClick={() => {
                setUser(null);
                localStorage.setItem("accessToken", "");

                navigate("/signin");
              }}
            >
              Sign Out
            </Button>
          </RenderIf>
        </Flex>
      </Flex>
    </Box>
  );
}
