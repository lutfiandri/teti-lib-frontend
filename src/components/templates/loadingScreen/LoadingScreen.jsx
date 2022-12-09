import { RenderIf } from "@/components/elements/RenderIf";
import { Center, Text, VStack } from "@chakra-ui/react";
import styles from "./loading.module.css";

export function LoadingScreen({ when = false, text = "Loading" }) {
  return (
    <RenderIf when={when}>
      <Center
        w="100vw"
        h="100vh"
        pos="fixed"
        top={0}
        bg="gray.100"
        zIndex={1000000}
      >
        <VStack>
          <span className={styles.loader}>
            <span></span>
          </span>
          <Text fontSize="lg" color="gray.700">
            {text}
          </Text>
        </VStack>
      </Center>
    </RenderIf>
  );
}
