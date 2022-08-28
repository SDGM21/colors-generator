import { isAlphaOrNumb } from "./isAlphaOrNumb";

const LIMIT: number = 10;

export function getColorGroup(color: string): string[] {
  let finalStringArray: string[] = [color];
  let newColor: string = "";
  let prevColor: string = color;

  //   if (color.length === 3) {
  //     let splitedString: string[] = [color[0] + color[1], color[2]];
  //   } else if (color.length === 4) {
  //     let splitedString: string[] = [color[0] + color[1], color[2] + color[3]];
  //   } else
  if (color.length === 6) {
    let splitedString: string[] = [
      color[0],
      color[1],
      color[2],
      color[3],
      color[4],
      color[5],
    ];

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
