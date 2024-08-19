import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import ClipPath from "../assets/svg/ClipPath";
import Scroll from "./Scroll";

const Benefits = () => {
  const [isVisible, elementRef] = Scroll();

  return (
    <Section id="whyus">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Play Smarter with DoubleDink"
        />

        <div className="flex flex-wrap gap-4 mb-10" ref={elementRef}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[15rem] transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h4 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p> 
                <div className="flex items-center mt-auto">
                </div>
              </div>

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;