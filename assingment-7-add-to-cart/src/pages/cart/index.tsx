import CartCard from '../../components/CartItems'
import { useCart } from '../../context/useCart';
import "./style.css"

const Carts = () => {
     const { cartState } = useCart();
  return (
      <div className="cart-container">
        <h2 className='cart-heading'>Cart list</h2>
      {cartState.items.map((curritems) => {
        return (
          <CartCard
            key={curritems.id}
            id={curritems.id}
            title={curritems.title}
            images={curritems.images}
            price={curritems.price}
          ></CartCard>
        );
      })}
    </div>
  );
}

export default Carts