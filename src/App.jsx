import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Page & Component Imports
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProductList from "./components/Products/ProductList";
import ProductForm from "./components/Products/ProductForm";
import Cart from "./components/Orders/Cart";
import MyOrders from "./components/Orders/MyOrders";
import PlaceOrder from "./components/Orders/PlaceOrder";
import UserProfile from "./components/Profile/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header>
          <h1>CateringApp</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Menu</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<ProductForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          © {new Date().getFullYear()} CateringApp. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
