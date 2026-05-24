import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Properties from "../components/Properties";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../layout/Footer";
import Certifications  from "../components/Certifications";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Team from "../components/Team";

const Home = ({ toggleTheme, theme }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Properties />
      <Stats />
      <Services />
      <Certifications />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Home;