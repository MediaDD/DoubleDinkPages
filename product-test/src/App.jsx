import ButtonGradient from "./assets/svg/ButtonGradient";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Status from "./components/Status";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <section id="features">
          <Features />
        </section>
        <section id="status">
          <Status />
        </section>
        <section id="testimonials">
        <Testimonials />
        </section>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;