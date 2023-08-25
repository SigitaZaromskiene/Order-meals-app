import { createContext } from "react";
import { useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [menuList, setMenuList] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  return (
    <Global.Provider
      value={{ menuList, setMenuList, errMessage, setErrMessage }}
    >
      {children}
    </Global.Provider>
  );
};
