import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        paddingX: "2rem",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});
