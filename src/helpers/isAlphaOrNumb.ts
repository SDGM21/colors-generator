export function isAlphaOrNumb(letter: string): "Alphabetic" | "Numeric" {
  if (
    letter.includes("A") ||
    letter.includes("B") ||
    letter.includes("C") ||
    letter.includes("D") ||
    letter.includes("E") ||
    letter.includes("F")
  ) {
    return "Alphabetic";
  } else {
    return "Numeric";
  }
}
