import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

export default function FilterBook() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue" m={2}>
        Filter
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup defaultValue="asc" title="Availability" type="radio">
          <MenuItemOption value="ShowAll">Show All</MenuItemOption>
          <MenuItemOption value="ShowAvailable">Show Available</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title="Genre" type="radio">
          <MenuItemOption value="All Genres">All Genres</MenuItemOption>
          <MenuItemOption value="Fiction">Fiction</MenuItemOption>
          <MenuItemOption value="nonFiction">Non Fiction</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
