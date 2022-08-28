function isHexAcceptedValue(letter: string | undefined): boolean {
  let isCheck: boolean = false;

  if (letter !== undefined) {
    if (
      letter.includes("0") ||
      letter.includes("1") ||
      letter.includes("2") ||
      letter.includes("3") ||
      letter.includes("4") ||
      letter.includes("5") ||
      letter.includes("6") ||
      letter.includes("7") ||
      letter.includes("8") ||
      letter.includes("9") ||
      letter.includes("A") ||
      letter.includes("B") ||
      letter.includes("C") ||
      letter.includes("D") ||
      letter.includes("E") ||
      letter.includes("F")
    ) {
      isCheck = !isCheck;
    }
  }
  return isCheck;
}

export default isHexAcceptedValue;
