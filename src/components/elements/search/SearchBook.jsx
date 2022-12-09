import { HStack } from "@chakra-ui/react";
import { FilterBookMenu } from "./FilterBookMenu";
import { SearchBar } from "./SearchBar";

export function SearchBook({
  searchValue,
  setSearchValue,
  availibilityValue,
  setAvailibilityValue,
  genreValue,
  setGenreValue,
}) {
  return (
    <HStack>
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <FilterBookMenu
        availibilityValue={availibilityValue}
        setAvailibilityValue={setAvailibilityValue}
        genreValue={genreValue}
        setGenreValue={setGenreValue}
      />
    </HStack>
  );
}
