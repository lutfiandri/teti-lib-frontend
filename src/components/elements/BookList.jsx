import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const BookList = ({
  error,
  isLoading,
  books,
  onOpen,
  setBookOpened,
  query,
}) => {
  const onCardClick = (book) => {
    onOpen();
    setBookOpened(book);
  };
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
        {books?.map((book) => (
          <Box
            onClick={() => onCardClick(book)}
            cursor="pointer"
            bg="white"
            width="100%"
            key={book._id}
          >
            <Box w="100%" bg="red.100">
              <Image
                w="100%"
                objectFit="cover"
                src={book?.imageUrl}
                alt={book?.title}
              />
            </Box>
            <Box w="160px" m={3}>
              <Text>{book.title}</Text>
              <Text fontSize="12">{book.author}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookList;
