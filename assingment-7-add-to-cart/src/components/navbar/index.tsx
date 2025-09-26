import { TiShoppingCart } from "react-icons/ti";
import "./header.css"
import { useCart } from "../../context/useCart";



const Header = () => {
  const {cartState} =useCart()
  return (
    <header className="header">
      <nav className="wrapper">
        <h1 className="company-name">Shopping Center</h1>
        <div className="cart-icon">
          <p>cart</p>
          <span className="cart-count">{ cartState.items.length}</span>
          <TiShoppingCart />
        </div>
      </nav>
    </header>
  );
}

export default Header