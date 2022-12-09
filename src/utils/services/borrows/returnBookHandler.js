import { createFetcher } from "../fetcher";

export const returnBookHandler = async (
  book,
  toast,
  onClose,
  books,
  setBooks,
  user,
  setUser,
) => {
  try {
    const fetcher = createFetcher();

    await fetcher.put("/borrows/return", { bookId: book._id });
    toast({
      title: "Returned",
      description: "Book successfully returned.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    onClose();

    setUser({
      ...user,
      borrowedBookIds: user.borrowedBookIds.filter(
        (borrowedBookId) => borrowedBookId !== book._id,
      ),
    });
    const newBooks = books;
    const newBookIndex = newBooks.findIndex(
      (newBook) => newBook._id === book._id,
    );
    newBooks[newBookIndex].numOfAvailableBooks += 1;
    newBooks[newBookIndex].borrowerIds = newBooks[
      newBookIndex
    ].borrowerIds.filter((borrowerId) => borrowerId !== user.id);
    setBooks(newBooks);
  } catch (error) {
    toast({
      title: "Error",
      description: "Error Happened",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.error(error);
  }
};
