// this function conforms to the constraint that the decimal equivalent of
// a binary digit must be calculated with a function
const digitToDecimalEquivalent = (digit: number, power: number): number =>
  digit * Math.pow(2, power);

export const convertToDecimal = (binaryValue: string): string => {
  let decValue = 0;
  const binaryValueLength = binaryValue.length;
  for (let idx = 0; idx < binaryValueLength; idx++) {
    const power = binaryValueLength - idx - 1;
    decValue += digitToDecimalEquivalent(Number(binaryValue[idx]), power);
  }
  return `${decValue}`;
};
