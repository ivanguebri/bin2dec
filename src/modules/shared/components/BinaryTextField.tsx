import { useState } from "react";
import TextField from "@mui/material/TextField";
import { errorMessages, labels, validatorFunctions } from "..";

type BinaryTextFieldProps = {
  value: string;
  onValueChange: (newValue: string, hasError: boolean) => void;
};
export default function BinaryTextField({
  value,
  onValueChange,
}: BinaryTextFieldProps) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value;
    const invalidValue = !validatorFunctions.binaryValue(value);
    if (invalidValue) {
      setHasError(true);
      setErrorMessage(errorMessages.invalidBinaryValue);
    } else {
      setHasError(false);
      setErrorMessage("");
    }
    onValueChange(value, invalidValue);
  };

  return (
    <TextField
      label={labels.binaryValue}
      value={value}
      onChange={onChange}
      error={hasError}
      helperText={errorMessage}
    />
  );
}
