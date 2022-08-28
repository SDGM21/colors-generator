import React, { useContext, useState } from "react";
import {ColorContext} from "../context/ColorContext";

const MainView = () => {
  const {colorsGroup, setColorsGroup} = useContext(ColorContext);

  const [colorsCard, setColorsCard] = useState([]);
  

  return (
    <div>
      {colorsCard.map((element: string) => {
        return (
          <div
            style={{ backgroundColor: element, border: "2px snow" }}
            key={element}
          >
            <div>
              <h1>{element}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainView;
