import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const images: string[] = [
  "https://via.placeholder.com/1200x400?text=Bike+Towing",
  "https://via.placeholder.com/1200x400?text=Petrol+Delivery",
  "https://via.placeholder.com/1200x400?text=Bike+Repair"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
        >
          <img src={img} alt="service" />
        </div>
      ))}

      <div className={styles.overlay}>
        <h1>Bike Rescue 🚀</h1>
        <p>Petrol | Towing | Repair</p>
      </div>
    </div>
  );
};

export default Carousel;