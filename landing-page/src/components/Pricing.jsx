import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Scroll from "./Scroll";
import { Container } from 'react-bootstrap';

const Pricing = () => {
  const [isVisible, elementRef] = Scroll();

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading
          tag="Gain Your Edge Today"
          title="Introducing DoubleDink for Apex Legends"
        />
<center>
        <Container>
          <div class="center">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Youtube Video" 
              allowFullScreen
              className="embed-responsive-item">
            </iframe>
            <br></br>
          </div>
        </Container>
</center>
        <div
          className={`relative transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          ref={elementRef}
        >
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;