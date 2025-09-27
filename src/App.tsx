import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import LatestNews from "./components/LatestNews";
import Podcast from "./components/Podcast";
import Contact from "./components/Contact";
import Logos from "./components/Logos";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="text-ink bg-white">
      <Header />
      <Hero />
      <Services />
      <LatestNews />
      <Podcast />
      <Contact />
      <Logos />
      <Footer />
    </div>
  );
};

export default App;
