import { useContext } from "react";
import { TabContext } from ".";

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Tab must be used within Tabs");
  }
  return context;
};
