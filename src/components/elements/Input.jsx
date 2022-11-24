import {
  Box,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

export const BaseInput = ({ title, children }) => {
  return (
    <Box>
      <Text>{title}</Text>
      {children}
    </Box>
  );
};

export const TextInput = ({ title, name, placeholder }) => {
  return (
    <BaseInput title={title}>
      <Input name={name} placeholder={placeholder} />
    </BaseInput>
  );
};

export const TextAreaInput = ({ title, name, placeholder }) => {
  return (
    <BaseInput title={title}>
      <Textarea name={name} placeholder={placeholder} />
    </BaseInput>
  );
};

export const DecimalNumberInput = ({ title, name, placeholder }) => {
  return (
    <BaseInput title={title}>
      <NumberInput defaultValue={1} min={1} precision={0} w="full">
        <NumberInputField borderLeftRadius={0} name={name} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </BaseInput>
  );
};

export const SelectOptionInput = ({
  title,
  name,
  placeholder,
  options = [],
}) => {
  return (
    <BaseInput title={title}>
      <Select name={name} placeholder={placeholder}>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </BaseInput>
  );
};
