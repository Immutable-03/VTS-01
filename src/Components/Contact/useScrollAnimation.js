import { useEffect } from 'react';

// Custom hook to apply animation classes when the elements are in the viewport
const useScrollAnimation = (elementRef, animationClass) => {
  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [elementRef, animationClass]);
};

export default useScrollAnimation;
