import Hero from "../components/Hero";
import Services from "../components/Service";
import Contact from "../components/Contact";
import HowItWorks from "../components/HowItWorks";
import TrustSection from "../components/TrustSection";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <Services />
      <HowItWorks />
      <Contact />
    </>
  );
};

export default Home;