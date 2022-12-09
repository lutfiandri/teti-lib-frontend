import { Box, useBreakpointValue } from "@chakra-ui/react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const size = useBreakpointValue({
    base: "base",
    md: "md",
  });

  return (
    <Box pos="sticky" top={0} zIndex={1000}>
      {size === "base" ? <MobileNavbar /> : <DesktopNavbar />}
    </Box>
  );
}
