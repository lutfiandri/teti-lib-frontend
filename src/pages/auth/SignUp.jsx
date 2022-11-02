import { PasswordInput } from "@/components/elements/PasswordInput";
import { SignInLayout } from "@/components/layouts/SignInLayout";
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      <Button colorScheme="blue" minW="30%">
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
