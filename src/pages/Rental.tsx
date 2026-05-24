import "./rental.css";

const bikes = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: "₹999/day",
    image: "/images/bike1.jpg",
  },
  {
    id: 2,
    name: "Yamaha R15",
    price: "₹799/day",
    image: "/images/bike2.jpg",
  },
  {
    id: 3,
    name: "KTM Duke 200",
    price: "₹899/day",
    image: "/images/bike3.jpg",
  },
  {
    id: 4,
    name: "Honda Activa",
    price: "₹499/day",
    image: "/images/bike4.png",
  },
    {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: "₹999/day",
    image: "/images/bike1.jpg",
  },
  {
    id: 2,
    name: "Yamaha R15",
    price: "₹799/day",
    image: "/images/bike2.jpg",
  },
  {
    id: 3,
    name: "KTM Duke 200",
    price: "₹899/day",
    image: "/images/bike3.jpg",
  },
  {
    id: 4,
    name: "Honda Activa",
    price: "₹499/day",
    image: "/images/bike4.png",
  },
    {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: "₹999/day",
    image: "/images/bike1.jpg",
  },
  {
    id: 2,
    name: "Yamaha R15",
    price: "₹799/day",
    image: "/images/bike2.jpg",
  },
  {
    id: 3,
    name: "KTM Duke 200",
    price: "₹899/day",
    image: "/images/bike3.jpg",
  },
  {
    id: 4,
    name: "Honda Activa",
    price: "₹499/day",
    image: "/images/bike4.png",
  },
];

const Rental = () => {
  return (
    <div className="rental-container">
      <h1>Rental Bikes 🚀</h1>

      <div className="bike-grid">
        {bikes.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.image} alt={bike.name} />

            <div className="bike-info">
              <h3>{bike.name}</h3>
              <p className="price">{bike.price}</p>

              <a
                href="https://wa.me/919667609610?text=Hi%20I%20want%20to%20rent%20a%20bike"
                target="_blank"
                className="rent-btn"
              >
                Rent Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rental;