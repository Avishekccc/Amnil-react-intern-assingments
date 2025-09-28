import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const useCart = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
