import { useMemo } from "react";

export const useFilteredBooks = (
  books,
  searchFilter,
  availibilityFilter,
  genreFilter,
) => {
  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        const searches = searchFilter
          .toLowerCase()
          .split(" ")
          .filter((s) => s !== "");
        if (searchFilter === "") return true;
        if (
          searches.every((search) => {
            return (
              book.title.toLowerCase().includes(search) ||
              book.author.toLowerCase().includes(search) ||
              book.publisher.toLowerCase().includes(search)
            );
          })
        ) {
          return true;
        }
        return false;
      })
      .filter((book) => {
        if (availibilityFilter === "ShowAll") {
          return true;
        } else if (availibilityFilter === "ShowAvailable") {
          return book.numOfAvailableBooks > 0;
        }
      })
      .filter((book) => {
        if (genreFilter === "All Genres") {
          return true;
        } else if (genreFilter === "Fiction") {
          return book.isFiction;
        } else if (genreFilter === "nonFiction") {
          return !book.isFiction;
        }
      });
  }, [books, searchFilter, availibilityFilter, genreFilter]);

  return filteredBooks;
};
