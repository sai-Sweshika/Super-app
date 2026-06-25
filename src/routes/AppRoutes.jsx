import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Categories from "../Pages/Catergories";
import Dashboard from "../Pages/Dashboard";
import Movies from "../Pages/Movies";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;