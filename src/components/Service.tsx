import "./style.css";
import "./service.css"

const Services = () => {
  return (
    <section className="section">
      <h2>Our Services</h2>

      <div className="grid">
        <div className="card">⛽ Petrol Delivery</div>
        <div className="card">🛵 Bike Towing</div>
        <div className="card">🔋 Jump Start</div>
        <div className="card">🔧 Emergency Repair</div>
      </div>
    </section>
  );
};

export default Services;