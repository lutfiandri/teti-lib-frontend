import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/chakra";
import { UserContextProvider } from "@/contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
