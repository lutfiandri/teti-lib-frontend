import { createFetcher } from "@/utils/services/fetcher";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function ConfirmDialog({
  title,
  subtitle,
  actionButtonText,
  actionButtonColorScheme = "red",
  onActionClick,
  onClose,
  isOpen,
}) {
  const cancelRef = useRef();

  const actionClickHandler = () => {
    onClose();
    onActionClick();
  };

  return (
    <>
      {/* <Button colorScheme="red" onClick={onOpen}>
        Delete Customer
      </Button> */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay bg="blackAlpha.50" backdropFilter="blur(2px)">
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>{subtitle}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme={actionButtonColorScheme}
                onClick={actionClickHandler}
                ml={3}
              >
                {actionButtonText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
