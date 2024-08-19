import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Status from "./components/Status";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <section id="home">
        <Benefits />
        </section>
        <section id="pricing">
        <Pricing />
        </section>
        <section id="status">
        <Status />
        </section>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
