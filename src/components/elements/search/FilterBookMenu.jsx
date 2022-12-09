import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

export function FilterBookMenu({
  availibilityValue,
  setAvailibilityValue,
  genreValue,
  setGenreValue,
}) {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        colorScheme="gray"
        variant="outline"
        rightIcon={<ChevronDownIcon />}
      >
        Filter
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup
          onChange={setAvailibilityValue}
          value={availibilityValue}
          defaultValue="ShowAll"
          title="Availability"
          type="radio"
        >
          <MenuItemOption value="ShowAll">Show All</MenuItemOption>
          <MenuItemOption value="ShowAvailable">Show Available</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          onChange={setGenreValue}
          value={genreValue}
          defaultValue="All Genres"
          title="Genre"
          type="radio"
        >
          <MenuItemOption value="All Genres">All Genres</MenuItemOption>
          <MenuItemOption value="Fiction">Fiction</MenuItemOption>
          <MenuItemOption value="nonFiction">Non Fiction</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
