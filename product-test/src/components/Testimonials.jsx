import Section from "./Section";
import Heading from "./Heading";
import Scroll from "./Scroll";
import { testimonial } from "../constants";

const Testimonials = () => {
  const [isVisible, elementRef] = Scroll();

  return (
    <Section id="testimonials">
      <div className="container">
        <Heading
          title="Testimonials"
          text="What our clients say"
        />
        <div ref={elementRef} className={`mt-10 grid gap-10 lg:grid-cols-3 lg:gap-x-8 ${isVisible ? 'animate-fadeIn' : ''}`}>
          {testimonial.map((item, index) => (
            <div key={index} className="bg-n-7 p-6 rounded-3xl overflow-hidden shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={item.author.picture}
                  alt={item.author.fullName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-bold text-n-1">{item.author.fullName}</h4>
                  <p className="text-n-3">{item.author.designation}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(item.rating) ? "text-yellow-400" : "text-n-3"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.986a1 1 0 00.95.69h4.212c.969 0 1.372 1.24.588 1.81l-3.404 2.48a1 1 0 00-.364 1.118l1.286 3.986c.3.921-.755 1.688-1.538 1.118l-3.404-2.48a1 1 0 00-1.176 0l-3.404 2.48c-.783.57-1.838-.197-1.538-1.118l1.286-3.986a1 1 0 00-.364-1.118l-3.404-2.48c-.784-.57-.381-1.81.588-1.81h4.212a1 1 0 00.95-.69l1.286-3.986z" />
                  </svg>
                ))}
              </div>
              <p className="text-n-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
