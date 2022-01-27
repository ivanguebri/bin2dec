import Box from "@mui/material/Box";

type ConversionResultProps = {
  result: string;
};
export default function ConversionResult({ result }: ConversionResultProps) {
  return (
    <Box>
      <span>Result of conversion:</span>
      <p>{result}</p>
    </Box>
  );
}
