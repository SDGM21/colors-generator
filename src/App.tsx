import React, { useContext, useState } from "react";
import TopBar from "./components/TopBar";
import MainView from "./components/MainView";
import { ColorsProvider } from "./context/ColorContext";

function App() {
  return (
    <>
      <div>
        <ColorsProvider>
          <TopBar />
          <MainView />
        </ColorsProvider>
      </div>
    </>
  );
}

export default App;
