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

export const TextInput = ({ title, name, placeholder, value }) => {
  return (
    <BaseInput title={title}>
      <Input name={name} placeholder={placeholder} value={value} />
    </BaseInput>
  );
};

export const TextAreaInput = ({ title, name, placeholder, value }) => {
  return (
    <BaseInput title={title}>
      <Textarea
        name={name}
        placeholder={placeholder}
        value={value}
        noOfLines={5}
      />
    </BaseInput>
  );
};

export const DecimalNumberInput = ({ title, name, placeholder, value }) => {
  return (
    <BaseInput title={title}>
      <NumberInput
        defaultValue={1}
        min={1}
        precision={0}
        w="full"
        value={value}
      >
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
  value,
  options = [],
}) => {
  return (
    <BaseInput title={title}>
      <Select name={name} placeholder={placeholder} defaultValue={value}>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </BaseInput>
  );
};
