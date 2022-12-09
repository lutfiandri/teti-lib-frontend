import styles from "@/styles/transition.module.css";
import {
  Box,
  Image,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import clsx from "clsx";

import UserContext from "@/contexts/userContext";
import { useContext } from "react";
import { HiBookmark, HiCheck, HiXMark } from "react-icons/hi2";
import { RenderIf } from "./RenderIf";

export default function BookCard({ book, onClick }) {
  const { user } = useContext(UserContext);
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      bg="white"
      width="100%"
      key={book._id}
      borderRadius="lg"
      overflow="hidden"
      className={clsx(styles["animate-up-on-hover"])}
      pos="relative"
      mb={4}
    >
      <Box w="100%" bg="red.100">
        <Image
          w="100%"
          objectFit="cover"
          src={book?.imageUrl}
          alt={book?.title}
        />
      </Box>
      <Box m={3}>
        <Text>{book.title}</Text>
        <Text fontSize="12">
          {book?.author} • {book?.publisher}
        </Text>
      </Box>

      {/* Pills */}
      <VStack pos="absolute" right={2} top={2} spacing={0.5} alignItems="end">
        <RenderIf when={user && user?.borrowedBookIds?.includes(book?._id)}>
          <BookStatusPill
            text="Borrowed"
            icon={HiBookmark}
            colorScheme="blue"
          />
        </RenderIf>
        <RenderIf when={book?.numOfAvailableBooks > 0}>
          <BookStatusPill
            text={`Available (${book?.numOfAvailableBooks})`}
            icon={HiCheck}
            colorScheme="green"
          />
        </RenderIf>
        <RenderIf when={book?.numOfAvailableBooks === 0}>
          <BookStatusPill
            text="Out of Books"
            icon={HiXMark}
            colorScheme="gray"
          />
        </RenderIf>
      </VStack>
    </Box>
  );
}

function BookStatusPill({ colorScheme, icon, text }) {
  return (
    <Tag
      size="md"
      variant="solid"
      colorScheme={colorScheme}
      rounded="full"
      dropShadow="md"
    >
      <TagLabel>{text}</TagLabel>
      <TagRightIcon marginLeft={1} boxSize="12px" as={icon} />
    </Tag>
  );
}
