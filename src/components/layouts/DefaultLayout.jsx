import Navbar from "@/components/templates/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export function DefaultLayout({ children, title = "TETI Library" }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navbar />
      <Box as="main" minH="calc(100vh - 64px)">
        {children}
      </Box>
    </>
  );
}
