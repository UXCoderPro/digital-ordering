import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages

// Nav Bar
import OutletPage from "./pages/OutletPage";
import MenuPage from "./pages/MenuPage";
import AccountPage from "./pages/AccountPage";
import MorePage from "./pages/MorePage";

// Other pages
import Address from "./pages/myAccount/Address";
import MyOrders from "./pages/myAccount/MyOrders";
import Profile from "./pages/myAccount/Profile";
import Credits from "./pages/myAccount/Credits";
import Points from "./pages/myAccount/Points";
import Coupon from "./pages/myAccount/Coupon";
import MyQr from "./pages/myAccount/MyQr";
import SplashScreen from "./pages/SplashScreen";

// product Related Pages
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";

// Components
import Navbar from "./components/Navbar/Navbar";
import BottomPromo from "./components/bottomPromo";

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000); // 6 seconds
    return () => clearTimeout(timer);
  }, []);

  // Only show navbar on these routes (lowercase all for safety)
  const navbarVisibleRoutes = ["/", "/outlet", "/account", "/more"];
  const currentPath = location.pathname.toLowerCase();
  const showNavbar = navbarVisibleRoutes.includes(currentPath);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="w-full min-h-screen overflow-scroll scrollbar-hide">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MenuPage />} />
          <Route path="/outlet" element={<OutletPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/account/MyOrders" element={<MyOrders />} />
          <Route path="/account/Address" element={<Address />} />
          <Route path="/account/Profile" element={<Profile />} />
          <Route path="/account/Credits" element={<Credits />} />
          <Route path="/account/Points" element={<Points />} />
          <Route path="/account/Coupon" element={<Coupon />} />
          <Route path="/account/MyQr" element={<MyQr />} />
          <Route path="/ProductInfo/:id" element={<ProductDetail />} />
        </Routes>
      </AnimatePresence>

      {showNavbar && <Navbar />}
      <BottomPromo />
    </div>
  );
}

export default App;
