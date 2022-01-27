import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { ConversionResult } from "..";
import { BinaryTextField, converters } from "../../shared";

export default function ConverterContainer() {
  const [binaryValue, setBinaryValue] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [decimalValue, setDecimalValue] = useState<string>("");

  useEffect(() => {
    if (!hasError && binaryValue) {
      setDecimalValue(converters.convertToDecimal(binaryValue));
    } else {
      setDecimalValue("");
    }
  }, [binaryValue, hasError]);

  const onValueChange = (newValue: string, hasError: boolean) => {
    // this way of storing the entered binary value conforms to the constraint
    // of not using arrays to store the digits
    setBinaryValue(newValue);
    setHasError(hasError);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <BinaryTextField value={binaryValue} onValueChange={onValueChange} />
          <ConversionResult result={decimalValue} />
        </CardContent>
      </Card>
    </Container>
  );
}
