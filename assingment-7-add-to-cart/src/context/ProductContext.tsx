import { createContext, useReducer, type ReactNode } from "react";
import { cartReducer } from "./reducer";


type CartItem = {
  id: number;
  title: string;
  price: number;
  images: string;
};

export type cartState = {
    items : CartItem[]
}

export type Action =
  | { type: "ADD"; payload: CartItem }
  | { type: "REMOVE"; payload: number };

export const ProductContext = createContext<
  { cartState: cartState; dispatch: React.Dispatch<Action> } | undefined
>({
  cartState: {items:[]},
  dispatch: ()=>{}
});


export function CartProvider({ children }: { children: ReactNode }) {
  const initialState = JSON.parse(localStorage.getItem("cart") || "[]")
    const [cartState, dispatch] = useReducer(cartReducer, {items : initialState})
    
    return (
        <ProductContext.Provider value={{cartState, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}