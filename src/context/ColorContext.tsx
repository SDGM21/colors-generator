import React, { createContext, useState } from "react";

interface ContextProps {
  color:string,
  setColor:React.Dispatch<React.SetStateAction<string>> | any
}

const init : ContextProps = {
  color:"000000",
  setColor:null
}

export const ColorContext = createContext(init);

export const ColorsProvider = ({ children }: { children: any }) => {
  const [color, setColor] = useState("000000");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
