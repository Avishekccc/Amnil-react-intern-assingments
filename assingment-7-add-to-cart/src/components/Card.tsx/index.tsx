import { useCart } from "../../context/useCart";
import "./card.css"


export type ProductType = {
  id: number;
  title: string;
  price: number;
  images: string;
}
const Card = (props: ProductType) => {
  const { cartState, dispatch } = useCart()
  
  const inCart = cartState.items.some(curr => curr.id === props.id )
  return (
    <div className="card-container">
      <img
        src={props.images}
        alt="product-image"
      />
      <div className="content-wrapper">
        <div className="content">
          <p className="product-name">{ props.title}</p>
          <p className="product-price">
            Price <span>{props.price}</span>
          </p>
        </div>
        <div className="add-cart-btn">
          <button disabled={inCart} onClick={()=> dispatch({type:"ADD" , payload:{id: props.id, title: props.title, price:props.price, images: props.images}})}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card
