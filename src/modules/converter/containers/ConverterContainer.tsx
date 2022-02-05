import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid container item xs={12} sm={8} direction="column" spacing={2}>
        <Grid item>
          <Typography textAlign="center" variant="h1">
            Binary to Decimal Converter
          </Typography>
        </Grid>
        <Grid item>
          <BinaryTextField value={binaryValue} onValueChange={onValueChange} />
        </Grid>
        <Grid item>
          <ConversionResult result={decimalValue} />
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}
