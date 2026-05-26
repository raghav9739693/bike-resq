import "./trust.css";

const TrustSection = () => {
  return (
    <section className="trust">

      <h2 className="trust-title">Why Choose BikeResQ? 🚀</h2>

      <div className="trust-container">

        <div className="trust-card delay1">
          <h1>⭐</h1>
          <h3>50+ Happy Customers</h3>
          <p>Trusted by riders across your city</p>
        </div>

        <div className="trust-card delay2">
          <h1>🚀</h1>
          <h3>20–30 Min Response</h3>
          <p>Fast service when you need it most</p>
        </div>

        <div className="trust-card delay3">
          <h1>📍</h1>
          <h3>Available Near You</h3>
          <p>Serving your area quickly & efficiently</p>
        </div>

      </div>

    </section>
  );
};

export default TrustSection;