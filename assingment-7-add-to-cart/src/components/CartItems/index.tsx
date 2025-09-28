import "./style.css";
import { useCart } from "../../hooks/useCart.ts";
import type { ProductType } from "../Card.tsx";

const CartCard = ({ images, title, price, id }: ProductType) => {
  const { dispatch } = useCart();

  return (
    <div className="container">
      <div className="cart-card-wrapper">
        <img src={images} alt="product-image" className="product-image" />
        <div className="content-wrapper">
          <div className="content">
            <p className="cart-product-name">{title}</p>
            <p className="product-price">
              Price <span>{price}</span>
            </p>
          </div>
          <div className="add-cart-button">
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: id,
                })
              }
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
