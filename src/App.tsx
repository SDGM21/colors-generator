import React, { useContext, useState } from "react";
import TopBar from "./components/TopBar";
import MainView from "./components/MainView";
import {ColorContext} from "./context/ColorContext";

function App() {
  const [colors, setColors] = useState("#000000");

  return (
    <>
      <div>
        <ColorContext.Provider value={{colorsGroup:colors, setColorsGroup:setColors}}>
          <TopBar />
          <MainView />
        </ColorContext.Provider>
      </div>
    </>
  );
}

export default App;
