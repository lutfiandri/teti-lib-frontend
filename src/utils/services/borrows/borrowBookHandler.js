import { createFetcher } from "../fetcher";

export const borrowBookHandler = async (
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

    await fetcher.post("/borrows", { bookId: book._id });
    toast({
      title: "Borrowed",
      description: "Book saved into My Books.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    onClose();

    setUser({
      ...user,
      borrowedBookIds: [...user.borrowedBookIds, book._id],
    });
    const newBooks = books;
    const newBookIndex = newBooks.findIndex(
      (newBook) => newBook._id === book._id,
    );
    newBooks[newBookIndex].numOfAvailableBooks -= 1;
    newBooks[newBookIndex].borrowerIds.push(user._id);
    setBooks(newBooks);
  } catch (error) {
    toast({
      title: "Error",
      description: "Error happened.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    console.error(error);
  }
};
