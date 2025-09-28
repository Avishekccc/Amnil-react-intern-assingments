import Header from './components/navbar'
import Products from './pages/products/index.tsx'
import { CartProvider } from './context/ProductContext.tsx'
import Carts from './pages/cart/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="main">
          <Header />
          <Products />
          <Carts />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App