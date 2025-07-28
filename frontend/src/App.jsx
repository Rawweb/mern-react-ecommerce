import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './components/Products/ProductDetails';
import Shop from './pages/Shop';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        expand
        richColors
        toastOptions={{
          style: {
            fontSize: '14px',
          },
        }}
      />

      <Routes>
        {/* User Layout */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="shop" element={<Shop />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          {/* Add other user routes here */}
        </Route>

        {/* Admin Layout */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
