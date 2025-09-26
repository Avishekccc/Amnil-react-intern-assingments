import Header from './components/navbar'
import Products from './pages/products/index.tsx'
import { CartProvider } from './context/ProductContext.tsx'
import Carts from './pages/cart/index.tsx'

const App = () => {
  return (
    <CartProvider>
      <div className='main'>
        <Header />
        <Products />
        <Carts />
      </div>
    </CartProvider>
  );
}

export default App