import type { Action, cartState } from "./ProductContext"

export function cartReducer(state: cartState, action: Action) {
    let newState : cartState
    switch (action.type) {
        case "ADD":
           newState= { ...state, items: [...state.items, action.payload] }
            break;
        case "REMOVE":
           newState = {
             ...state,
             items: state.items.filter((i) => i.id !== action.payload),
           };
            break;
        default:
            newState=state
    }

    localStorage.setItem("cart",JSON.stringify(newState.items))
    return newState
}