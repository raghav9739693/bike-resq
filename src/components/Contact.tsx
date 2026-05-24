import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Need Help?</h2>
      <p>Available 24/7 🚀</p>

      <a
        href="https://wa.me/919667609610?text=Hi%20I%20need%20bike%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        💬 Chat on WhatsApp
      </a>
    </section>
  );
};

export default Contact;