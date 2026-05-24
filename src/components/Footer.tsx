import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>BikeResQ 🚀</h2>
          <p>
            Fast and reliable bike rescue services. We help you anytime, anywhere.
          </p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Petrol Delivery</li>
            <li>Bike Towing</li>
            <li>Jump Start</li>
            <li>Emergency Repair</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📞 9667609610</p>
          <p>📍 Available in your city</p>
          <p>⏱ 24/7 Service</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2026 BikeResQ | All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;