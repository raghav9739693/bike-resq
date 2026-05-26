import { useState } from "react";
import "./smartChat.css";

const SmartChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { text: "Hi 👋 Welcome to BikeResQ", type: "bot" },
    { text: "How can we help you today?", type: "bot" }
  ]);

  const [options, setOptions] = useState([
    "Bike Towing",
    "Petrol Delivery",
    "Repair",
    "Jump Start"
  ]);

  // 📍 GET LIVE LOCATION
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const link = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;

      let newMsgs = [
        ...messages,
        { text: "📍 Location Shared", type: "user" },
        { text: "Thanks! Sending details to support 🚀", type: "bot" }
      ];

      setMessages(newMsgs);

      // 📲 SEND TO WHATSAPP
      const fullChat = newMsgs.map(m => m.text).join("%0A");

      const whatsappURL = `https://wa.me/919667609610?text=${fullChat}%0A📍Location:${link}`;

      window.open(whatsappURL, "_blank");
    });
  };

  const handleOption = (option: string) => {
    let newMsgs = [...messages, { text: option, type: "user" }];

    if (option === "Bike Towing") {
      newMsgs.push({
        text: "We can tow your bike 🚀 Please share your location 📍",
        type: "bot"
      });
    }

    if (option === "Petrol Delivery") {
      newMsgs.push({
        text: "Petrol delivery available ⛽ Share your location 📍",
        type: "bot"
      });
    }

    if (option === "Repair") {
      newMsgs.push({
        text: "We will send mechanic 🔧 Tell us your issue",
        type: "bot"
      });
    }

    if (option === "Jump Start") {
      newMsgs.push({
        text: "Battery issue? We can help 🔋 Share location 📍",
        type: "bot"
      });
    }

    setMessages(newMsgs);

    // 👉 Next step options
    setOptions(["Share Location 📍", "Book Now 🚀"]);
  };

  return (
    <div className="chat-wrapper">

      {/* BUTTON */}
      <div className="chat-icon" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* CHATBOX */}
      {open && (
        <div className="chat-box">

          {/* HEADER */}
          <div className="chat-header">
            BikeResQ Assistant 🚀
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          {/* BODY */}
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* OPTIONS */}
          <div className="chat-options">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  if (opt.includes("Location")) {
                    getLocation();
                  } else if (opt.includes("Book")) {
                    window.location.href = "/booking";
                  } else {
                    handleOption(opt);
                  }
                }}
              >
                {opt}
              </button>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

export default SmartChat;