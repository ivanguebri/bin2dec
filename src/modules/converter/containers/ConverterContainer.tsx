import { useEffect, useState } from "react";
import { ConversionResult } from "..";
import { BinaryTextField, converters } from "../../shared";

export default function ConverterContainer() {
  const [binaryValue, setBinaryValue] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [decimalValue, setDecimalValue] = useState<string>("");

  useEffect(() => {
    if (!hasError) {
      setDecimalValue(converters.convertToDecimal(binaryValue));
    } else {
      setDecimalValue("");
    }
  }, [binaryValue, hasError]);

  const onValueChange = (newValue: string, hasError: boolean) => {
    setBinaryValue(newValue);
    setHasError(hasError);
  };

  return (
    <>
      <BinaryTextField value={binaryValue} onValueChange={onValueChange} />
      <ConversionResult result={decimalValue} />
    </>
  );
}
