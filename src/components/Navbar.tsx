import { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">BikeResQ 🚀</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/rental">Rental</Link>
         <Link to="/spare-parts">Spare Parts</Link>
        <Link to="/about">About</Link>

        {/* BOOK BUTTON */}
        <button className="book-btn" onClick={() => setOpen(true)}>
          Book Now
        </button>

        <a
          href="https://wa.me/919667609610"
          target="_blank"
          className="call-btn"
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