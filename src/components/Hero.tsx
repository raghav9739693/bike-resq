import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* Overlay */}
      <div className="hero-overlay">

        {/* Logo */}
        {/* <img src="/images/logo.png" alt="logo" className="hero-logo" /> */}

        {/* Main Content */}
        <div className="hero-content">
          <h1>
            Bike Breakdown? <span>Don’t Worry!</span>
          </h1>

          <p>
            Petrol Delivery | Bike Towing | Jump Start | Emergency Help
          </p>

          <div className="hero-tags">
            <span>⚡ Fast 20–30 Min</span>
            <span>📍 Available Near You</span>
            <span>💰 Affordable</span>
          </div>

          <a
            href="https://wa.me/919667609610?text=Hi%20I%20need%20bike%20help.%20Sharing%20my%20location%20now."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            📲 Get Help on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;