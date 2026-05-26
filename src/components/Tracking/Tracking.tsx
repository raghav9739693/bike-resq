import { useEffect, useState } from "react";
import "./tracking.css";

const Tracking = () => {
  const [status, setStatus] = useState("🚀 Searching for nearby rider...");
  const [coords, setCoords] = useState<any>(null);

  // 📍 GET USER LOCATION ON LOAD
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    });

    // STATUS FLOW
    setTimeout(() => setStatus("🛵 Rider Assigned"), 5000);
    setTimeout(() => setStatus("📍 Rider is on the way (15–20 min)"), 10000);
    setTimeout(() => setStatus("✅ Rider reached your location"), 1200000);
  }, []);

  return (
    <div className="tracking-container">

      <h2>Live Service Tracking 🚀</h2>

      {/* STATUS */}
      <div className="status-box">{status}</div>

      {/* MAP */}
      {coords ? (
        <iframe
          title="map"
          src={`https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
          className="map"
        />
      ) : (
        <p>📍 Getting your location...</p>
      )}

      {/* INFO */}
      <div className="info-box">
        <p>👤 Rider: Rahul</p>
        <p>📞 Contact: 9667609610</p>
        <p>⏱ ETA: 15–20 mins</p>
      </div>

      {/* ACTION */}
      <a
  href="tel:9667609610"
  className="help-btn"
>
  Call Rider 📞
</a>

    </div>
  );
};

export default Tracking;