import { Navbar } from "@/components/templates/Navbar";
import { Helmet } from "react-helmet";
import { useDisclosure, useToast } from "@chakra-ui/react";
import Masonry from 'react-smart-masonry';

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
