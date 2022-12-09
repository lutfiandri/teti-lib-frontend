import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export function SearchBar({ value, setValue }) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <HiMagnifyingGlass />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search by title, author, or publisher"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputGroup>
  );
}
