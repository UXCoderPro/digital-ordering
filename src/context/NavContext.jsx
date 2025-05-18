import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState("/");

  return (
    <NavContext.Provider value={{ activeRoute, setActiveRoute }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
