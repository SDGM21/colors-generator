import { createContext } from "react";

interface ColorsData {
  colorsGroup: any,
  setColorsGroup: any
}

const init : ColorsData = {
  colorsGroup: "#000000",
  setColorsGroup: () => false
}

export const ColorContext = createContext(init);
