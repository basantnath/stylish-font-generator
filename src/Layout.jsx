import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Buttons/ScrollToTop";
import ScrollMediaAction from "./components/Buttons/SocialMediaAction";
export default function layout() {
  return (
    <>
      {/* Buttons */}
      <ScrollToTop />
      <ScrollMediaAction />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
