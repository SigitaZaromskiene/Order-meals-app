import { createContext } from "react";
import { useState, useEffect } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [menuList, setMenuList] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [cart, setCart] = useState(null);
  const [cartList, setCartList] = useState(null);
  const [cartListResponse, setCartListResponse] = useState(null);

  const [editSum, setEditSum] = useState(null);
  const [modal, setModal] = useState(false);
  const [editSumResponse, setEditSumResponse] = useState(null);

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
        setCartListResponse,
        cartListResponse,
        setModal,
        modal,
        setEditSum,
        editSum,
        setEditSumResponse,
        editSumResponse,
      }}
    >
      {children}
    </Global.Provider>
  );
};
