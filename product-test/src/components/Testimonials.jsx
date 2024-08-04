import Section from "./Section";
import Heading from "./Heading";
import Scroll from './Scroll';

const Features = () => {
  const [isVisible, elementRef] = Scroll();

  return (
    <Section id="features">
      <div className="container">
        <Heading
          title="Doubledink for A Game"
          text="Dominate your game today."
        />

        <div className="relative" ref={elementRef}>
          <div className={`relative z-1 grid gap-5 lg:grid-cols-2 mb-5 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative min-h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Product Box Here"
                />
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[20rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Features</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  This product has this feature!
                  And this feature!
                  And you cannot forget about this feature!
                  What about this feature?
                  We got you covered!
                </p>
              </div>
            </div>
          </div>

          <div className={`relative z-1 flex items-center h-[20rem] p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[20rem] transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Demo Video"
                height={360}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Demo Video</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Unlock your full potential with DoubleDink!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
