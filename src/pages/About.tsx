import "./about.css";

const About = () => {
  return (
    <section className="about-page">

      <div className="about-overlay">

        {/* TITLE */}
        <h1 className="about-title">About BikeResQ 🚀</h1>

        {/* INTRO */}
        <p className="about-intro">
          We are on a mission to solve one of the most common problems faced by bike riders —
          unexpected breakdowns on the road.
        </p>

        {/* CONTENT GRID */}
        <div className="about-grid">

          <div className="about-card">
            <h2>🚨 Problem</h2>
            <p>
              Many riders get stuck due to petrol shortage, battery failure, or sudden breakdown.
              Finding help quickly is difficult and time-consuming.
            </p>
          </div>

          <div className="about-card">
            <h2>💡 Our Solution</h2>
            <p>
              BikeResQ provides instant roadside assistance like petrol delivery,
              towing, jump start, and emergency repair within 20–30 minutes.
            </p>
          </div>

          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To make bike assistance fast, affordable, and accessible for everyone
              anytime and anywhere.
            </p>
          </div>

          <div className="about-card">
            <h2>🚀 Future Vision</h2>
            <p>
              We aim to expand this service across cities and build a complete platform
              for roadside assistance and bike services.
            </p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/919667609610?text=Hi%20I%20need%20bike%20help"
          target="_blank"
          className="about-btn"
        >
          Get Help Now 📲
        </a>

      </div>

    </section>
  );
};

export default About;