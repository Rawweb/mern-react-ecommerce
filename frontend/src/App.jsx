import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Admin Layout */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
