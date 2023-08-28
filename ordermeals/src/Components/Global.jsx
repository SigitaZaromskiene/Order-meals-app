import { createContext } from "react";
import { useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [menuList, setMenuList] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [cart, setCart] = useState(null);
  const [cartList, setCartList] = useState(null);

  return (
    <Global.Provider
      value={{
        menuList,
        setMenuList,
        errMessage,
        setErrMessage,
        lastUpdate,
        setLastUpdate,
        cart,
        setCart,
        cartList,
        setCartList,
      }}
    >
      {children}
    </Global.Provider>
  );
};
