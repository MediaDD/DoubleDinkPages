import Section from "./Section";
import { productbox } from "../assets";
import Heading from "./Heading";
import Scroll from "./Scroll";
import { featuresList, videoLink } from "../constants";

const Features = () => {
  const [isVisible, elementRef] = Scroll();

  return (
    <Section id="features">
      <div className="container">
        <Heading
          title="Doubledink for A Game"
          text="Dominate your game today."
        />

        <div className="relative">
          <div ref={elementRef} className={`relative z-1 grid gap-5 lg:grid-cols-2 mb-5 ${isVisible ? 'animate-fadeIn' : ''}`}>
            <div className="relative min-h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={productbox}
                  width={630}
                  height={750}
                  alt="Product Box Here"
                />
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[20rem]">
              <div className="py-12 px-4 xl:px-8 h-full overflow-y-auto">
                <h4 className="h4 mb-4">Features</h4>
                <ul className="body-2 mb-[2rem] text-n-3 list-disc list-inside">
                  {featuresList.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div ref={elementRef} className={`relative z-1 flex items-center h-[20rem] p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[20rem] ${isVisible ? 'animate-fadeIn' : ''}`}>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <iframe
                className="w-full h-full object-cover md:object-right"
                src={videoLink}
                width={800}
                height={360}
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
