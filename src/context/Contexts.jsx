import React, { createContext, useContext } from "react";
const context = createContext();
const Contexts = ({ children }) => {
  return <context.Provider value={"lala"}>{children}</context.Provider>;
};
//global hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
