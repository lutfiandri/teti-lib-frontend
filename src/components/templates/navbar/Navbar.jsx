import { useBreakpointValue } from "@chakra-ui/react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const size = useBreakpointValue({
    base: "base",
    md: "md",
  });
  if (size === "base") {
    return <MobileNavbar />;
  }
  if (size === "md") {
    return <DesktopNavbar />;
  }
}
