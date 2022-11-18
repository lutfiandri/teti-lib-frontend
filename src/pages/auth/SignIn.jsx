import { PasswordInput } from "@/components/elements/PasswordInput";
import { SignInLayout } from "@/components/layouts/SignInLayout";
import UserContext from "@/contexts/userContext";
import { useRole } from "@/utils/hooks/useRole";
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
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

export function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const signInHandler = async () => {
    try {
      const res = await fetcher.post("/auth/signin", {
        email: email,
        password: password,
      });

      if (!res.status) throw new Error(res.error);

      const user = res.data.data.user;

      setUser({
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        borrowedBookIds: user.borrowedBookIds,
      });

      localStorage.setItem("accessToken", res.data.data.accessToken);

      navigate(user.role === "USER" ? "/" : "/admin/books");
    } catch (error) {
      if (error.response.status === 401) {
        toast({
          title: "Wrong email or password",
          status: "error",
          isClosable: true,
          position: "top",
          duration: 5000,
        });
      }
    }
  };

  return (
    <SignInLayout title="Sign In - TETI Library">
      <Text as="h1" fontSize="3xl" fontWeight="bold">
        Sign In
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
      </Stack>
      <Button colorScheme="blue" minW="30%" onClick={signInHandler}>
        Sign In
      </Button>

      <Center mt={6} mb={2}>
        <Box borderBottom="1px" borderBottomColor="gray.300" w="60%"></Box>
      </Center>

      <Text>
        Don&apos;t have an account?{" "}
        <Button
          colorScheme="blue"
          variant="link"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Text>
    </SignInLayout>
  );
}
