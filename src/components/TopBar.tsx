import React, { useContext, useState } from "react";
import { ColorContext } from "../context/ColorContext";
import isHexAcceptedValue from "../helpers/isHexAcceptedValue";

const TopBar = () => {
  const { colorsGroup, setColorsGroup } = useContext(ColorContext);
  const [lateralCard, setLateralCard] = useState(false);

  const handleChange = (e: any) => {
    const stringInput: string = e.target.value.toString().toUpperCase();

    if (isHexAcceptedValue(stringInput[stringInput.length - 1])) {
      if (stringInput.length < 7) {
        setColorsGroup(`#${stringInput}`);
        e.target.value = stringInput;
      }
      if (
        stringInput.length === 3 ||
        stringInput.length === 4 ||
        stringInput.length === 6
      ) {
        setLateralCard(true);
      } else {
        setLateralCard(false);
      }
    } else {
      e.target.value = stringInput.substring(0, stringInput.length - 1);
    }
  };

  return (
    <div className="bg-gray-300 flex w-full">
      <div className="p-6 border-2 border-black text-lg">
        <label htmlFor="colors">
          HEX #:
          <input
            onChange={handleChange}
            type="text"
            maxLength={6}
            name="colors"
            placeholder="000000"
          />
        </label>
      </div>
      {lateralCard ? (
        <div
          className="rounded-full"
          style={{
            backgroundColor: colorsGroup,
            width: "64px",
            height: "64px",
          }}
        ></div>
      ) : (
        <div
          className="rounded-full flex justify-center items-center"
          style={{
            backgroundColor: "red",
            width: "64px",
            height: "64px",
            fontSize: "3rem",
          }}
        >
          <h1>?</h1>
        </div>
      )}
    </div>
  );
};

export default TopBar;
