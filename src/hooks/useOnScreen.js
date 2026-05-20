import { useState, useEffect, useRef } from 'react';

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useOnScreen;
