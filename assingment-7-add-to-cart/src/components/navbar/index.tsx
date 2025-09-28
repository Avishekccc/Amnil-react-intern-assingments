import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { useCart } from "../../hooks/useCart";
import { useTheme } from "../../hooks/useTheme";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const { cartState } = useCart();
  const {toggleTheme ,theme} = useTheme()
  return (
    <header className="header">
      <nav className="wrapper">
        <h1 className="company-name">Shopping Center</h1>
        <div className="cart-theme-container">
          <div className="theme-btn-wrapper">
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "light" ? <CiLight /> : <MdDarkMode />}
            </button>
          </div>
          <div className="cart-icon">
            <p>cart</p>
            <span className="cart-count">{cartState.items.length}</span>
            <TiShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
