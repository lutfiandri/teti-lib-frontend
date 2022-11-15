import { Navbar } from "@/components/templates/Navbar";
import { Helmet } from "react-helmet";

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
