import "./App.css";
import HomePage from "./components/pages/HomePage";
import MenuPage from "./components/pages/MenuPage"
import { Routes, Route } from "react-router-dom";
import HeaderSection from "./components/sections/HeaderSection"
import AboutPage from "./components/pages/AboutPage"
import Footer from "./components/sections/FooterSection"
import ReserveTablePage from "./components/pages/BookingPage";
import ConfirmedBookingPage from "./components/pages/ConfirmedBookingPage";


function App() {
  return (
    <>
      <HeaderSection />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/menu" element={<MenuPage />}/>
          <Route path="/reservations" element={<ReserveTablePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/confirmation" element={<ConfirmedBookingPage />}/>
        </Routes>
      <Footer />
    </>
  );
}
export default App;
