import { PasswordInput } from "@/components/elements/PasswordInput";
import { SignInLayout } from "@/components/layouts/SignInLayout";
import { fetcher } from "@/utils/services/fetcher";
import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toast = useToast();

  const signUpHandler = async () => {
    try {
      const res = await fetcher.post("/auth/signup", {
        name: name,
        email: email,
        password: password,
      });
      if (!res.status) throw new Error(res.error);

      toast({
        title: "Sign Up Success",
        status: "success",
        isClosable: true,
        // position: "top",
        duration: 5000,
      });
      navigate("/signin");
    } catch (error) {
      if (error?.response?.status === 409) {
        toast({
          title: "Another user with that email already registered.",
          status: "error",
          isClosable: true,
          // position: "top",
          duration: 5000,
        });
      }
    }
  };

  return (
    <SignInLayout title="Sign Up - TETI Library">
      <Text as="h1" fontSize="3xl" fontWeight="bold">
        Sign Up
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        Teti Library
      </Text>
      <Stack m={4}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          text={password}
          setText={setPassword}
          placeholder="Password"
          required
        />
        <PasswordInput
          text={confirmPassword}
          setText={setConfirmPassword}
          placeholder="Confirm Password"
          required
        />
      </Stack>
      <Button
        colorScheme="blue"
        minW="30%"
        onClick={() => {
          if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
          ) {
            toast({
              title: "Please fill out all field.",
              status: "error",
              isClosable: true,
              // position: "top",
              duration: 5000,
            });
          } else {
            if (confirmPassword === password) {
              signUpHandler();
            } else {
              toast({
                title: "Password doesn't match.",
                status: "error",
                isClosable: true,
                // position: "top",
                duration: 5000,
              });
            }
          }
        }}
      >
        Sign Up
      </Button>

      <Center mt={6} mb={2}>
        <Box borderBottom="1px" borderBottomColor="gray.300" w="60%"></Box>
      </Center>

      <Text>
        Already have an account?{" "}
        <Button
          colorScheme="blue"
          variant="link"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </Button>
      </Text>
    </SignInLayout>
  );
}
