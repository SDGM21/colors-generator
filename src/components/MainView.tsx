import React, { useContext, useEffect, useMemo, useState } from "react";
import { ColorContext } from "../context/ColorContext";
import { getColorGroup } from "../helpers/getColorGroup";

const MainView = () => {
  //Context
  const { color } = useContext(ColorContext);

  //CallBacks
  const getColorMemo: string[] = useMemo(() => getColorGroup(color), [color]);

  //States
  const [colorsCard, setColorsCard] = useState(getColorMemo);

  useEffect(() => {
    setColorsCard(getColorGroup(color));
  }, [color]);

  return (
    <div>
      {colorsCard.map((element: string) => {
        return (
          <div
            style={{ backgroundColor: `#${element}`, border: "2px snow" }}
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
