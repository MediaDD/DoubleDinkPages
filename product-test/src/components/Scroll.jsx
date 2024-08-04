import { useEffect, useRef, useState } from 'react';

const scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (elementRef.current) {
      console.log('Observing element:', elementRef.current);
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        console.log('Unobserving element:', elementRef.current);
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [isVisible, elementRef];
};

export default scroll;