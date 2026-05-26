import "./rental.css";

const bikes = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: "₹999/day",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  },
  {
    id: 2,
    name: "Yamaha R15",
    price: "₹799/day",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
   },
  {
    id: 3,
    name: "KTM Duke 200",
    price: "₹899/day",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
  },
  {
    id: 4,
    name: "Honda Activa",
    price: "₹499/day",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  },
  {
    id: 5,
    name: "Royal Enfield Meteor",
    price: "₹1099/day",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  },
  {
    id: 6,
    name: "Bajaj Pulsar NS200",
    price: "₹699/day",
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
  },
  {
    id: 7,
    name: "TVS Apache RTR 160",
    price: "₹649/day",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  },
  {
    id: 8,
    name: "Suzuki Access 125",
    price: "₹499/day",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  }
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