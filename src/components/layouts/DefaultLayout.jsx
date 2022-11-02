import { Navbar } from "@/components/templates/Navbar";

export function DefaultLayout({ children, title = "TETI Library" }) {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
}
