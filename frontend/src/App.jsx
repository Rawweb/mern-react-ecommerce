import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* User Layout */}
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Admin Layout */}
    </Routes>
    </BrowserRouter>
  )
};

export default App;
