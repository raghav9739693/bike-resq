import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import ServicesPage from "./pages/Service";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Rental from "./pages/Rental";
import SpareParts from "./pages/SpareParts";
import "antd/dist/reset.css";
import SmartChat from "./components/SmartChat";
import TrackingPage from "./pages/TrackingPage";
function App() {
  return (
    <>
      <Navbar />
<SmartChat/>
      <Routes>
        {/* HOME PAGE */}
        <Route  path="/" element={<Home />} />

        {/* OTHER PAGES */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/spare-parts" element={<SpareParts />} />
                <Route path="/tracking" element={<TrackingPage />} />



      </Routes>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;