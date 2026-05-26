import "./sparesparts.css";

const parts = [
  {
    id: 1,
    name: "Engine Oil",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f",
  },
  {
    id: 2,
    name: "Brake Pads",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f",
  },
  {
    id: 3,
    name: "Bike Battery",
    price: "₹1499",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    id: 4,
    name: "Headlight",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
  },
];
const SpareParts = () => {
  return (
    <div className="spare-container">
      <h1>Bike Spare Parts 🛠️</h1>

      <div className="parts-grid">
        {parts.map((part) => (
          <div className="part-card" key={part.id}>
            <img src={part.image} alt={part.name} />

            <div className="part-info">
              <h3>{part.name}</h3>
              <p className="price">{part.price}</p>

              <a
                href={`https://wa.me/919667609610?text=Hi%20I%20want%20to%20buy%20${part.name}`}
                target="_blank"
                className="buy-btn"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpareParts;