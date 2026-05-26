import { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">BikeResQ 🚀</h2>
  {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/"  onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/rental" onClick={() => setMenuOpen(false)}>Rental</Link>
         <Link to="/spare-parts" onClick={() => setMenuOpen(false)}>Spare Parts</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

        {/* BOOK BUTTON */}
 {/* BOOK BUTTON */}
<button
  className="book-btn"
  onClick={() => {
    setOpen(true);
    setMenuOpen(false);   // ✅ close menu
  }}
>
  Book Now
</button>

{/* WHATSAPP */}
<a
  href="https://wa.me/919667609610"
  target="_blank"
  className="call-btn"
  onClick={() => setMenuOpen(false)}   // ✅ close menu
>
  WhatsApp
</a>
      </div>

      {/* POPUP */}
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;