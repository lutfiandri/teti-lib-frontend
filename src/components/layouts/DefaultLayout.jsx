import { Navbar } from "@/components/templates/Navbar";
import { Helmet } from "react-helmet";
import { useDisclosure } from "@chakra-ui/react";

export function DefaultLayout({ children, title = "TETI Library" }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
}
