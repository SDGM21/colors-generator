import { isAlphaOrNumb } from "./isAlphaOrNumb";

export function getColorGroup(color: string): string[] {
  let finalStringArray: string[] = [color];
  let newColor: string = "";
  let prevColor: string = color;

  if (color.length === 6) {
    for (let x = 0; x < 2; x++) {
      for (let y = 0; y < prevColor.length; y++) {
        switch (isAlphaOrNumb(prevColor[y])) {
          case "Alphabetic":
            if (prevColor === "A") {
              newColor = newColor + "B";
            }
            if (prevColor === "B") {
              newColor = newColor + "C";
            }
            if (prevColor === "C") {
              newColor = newColor + "D";
            }
            if (prevColor === "D") {
              newColor = newColor + "E";
            }
            if (prevColor === "E") {
              newColor = newColor + "F";
            }
            if (prevColor === "F") {
              newColor = newColor + "0";
            }
            break;
          case "Numeric":
            let stringToNumber = Number(prevColor) + 1;
            newColor = newColor + stringToNumber.toString();
            break;
        }
      }
      finalStringArray.push(newColor);
      newColor = "";
    }
  }

  return finalStringArray;
}
