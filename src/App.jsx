import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Splash from "./pages/Splash.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import VerifyOTP from "./pages/VerifyOTP.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Cart from "./pages/Cart.jsx";
import Favourites from "./pages/Favourites.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/onboarding" element={<Onboarding />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/verify-otp" element={<VerifyOTP />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;