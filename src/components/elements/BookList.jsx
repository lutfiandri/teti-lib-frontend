import { Box, Image, Text } from "@chakra-ui/react";
import styles from "@/styles/transition.module.css";
import masonryStyles from "@/styles/masonry.module.css";
import clsx from "clsx";
import Masonry from "react-masonry-css";

const BookList = ({ error, isLoading, books, onOpen, setBookOpened }) => {
  const onCardClick = (book) => {
    onOpen();
    setBookOpened(book);
  };
  return (
    <Box mt={4}>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}

      <Masonry
        breakpointCols={{ default: 4, 480: 1, 768: 2, 992: 3 }}
        className={clsx(masonryStyles["masonry-grid"])}
        columnClassName={clsx(masonryStyles["masonry-grid-column"])}
      >
        {books?.map((book) => (
          <Box
            onClick={() => onCardClick(book)}
            cursor="pointer"
            bg="white"
            width="100%"
            key={book._id}
            borderRadius="lg"
            overflow="hidden"
            className={clsx(styles["animate-up-on-hover"])}
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
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default BookList;
