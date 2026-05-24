import "./service.css";

const services = [
  {
    title: "Petrol Delivery",
    desc: "Get fuel delivered instantly when you run out of petrol.",
    icon: "⛽",
  },
  {
    title: "Bike Towing",
    desc: "Safe and fast towing service to nearest garage.",
    icon: "🛵",
  },
  {
    title: "Jump Start",
    desc: "Battery dead? We will start your bike quickly.",
    icon: "🔋",
  },
  {
    title: "Emergency Repair",
    desc: "Minor repairs on the spot to get you moving.",
    icon: "🔧",
  },
];

const Services = () => {
  return (
    <section className="services-page">
      <div className="overlay">

        <h1 className="title">Our Services 🚀</h1>
        <p className="subtitle">
          Fast, Reliable & Affordable Bike Assistance
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;