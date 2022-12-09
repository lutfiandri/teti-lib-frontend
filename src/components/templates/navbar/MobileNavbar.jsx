import { RenderIf } from "@/components/elements/RenderIf";
import UserContext from "@/contexts/userContext";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

export default function MobileNavbar() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      as="header"
      bg="blue.500"
      textColor="white"
      pos="sticky"
      top={0}
      zIndex={100}
    >
      <Container as="nav" maxW="8xl">
        <HStack justifyContent="space-between" py={4} minH="60px">
          <Box>
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
                colorScheme="white"
                variant="link"
                p={4}
                py={1}
                onClick={() => navigate("/my/books")}
              >
                My Books
              </Button>
            </RenderIf>
            <RenderIf when={user?.role === "ADMIN"}>
              <Button
                colorScheme="white"
                variant="link"
                p={4}
                py={1}
                onClick={() => navigate("/admin/books")}
              >
                Manage Books
              </Button>
            </RenderIf>
          </Box>

          <Box w={6} h={6}>
            <HamburgerIcon
              color="white"
              role="button"
              style={{ width: "100%", height: "100%" }}
              onClick={() => setIsOpen(true)}
            />
          </Box>
        </HStack>
      </Container>

      <RenderIf when={isOpen}>
        <Flex
          w="100vw"
          bgColor="blackAlpha.800"
          backdropFilter="blur(2px)"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <IconButton
            colorScheme="whiteAlpha"
            color="white"
            pos="absolute"
            top={3}
            right={10}
            variant="ghost"
            size="md"
            icon={<CloseIcon />}
            onClick={() => setIsOpen(false)}
          />
          <Flex flexDir="column" align="center" h="full" py={8}>
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
                colorScheme="white"
                variant="link"
                p={4}
                onClick={() => navigate("/my/books")}
              >
                My Books
              </Button>
            </RenderIf>

            <RenderIf when={user?.role === "ADMIN"}>
              <Button
                colorScheme="white"
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
                colorScheme="blue"
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
      </RenderIf>
    </Box>
  );
}
