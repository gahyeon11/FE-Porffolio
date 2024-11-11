import { useEffect, useState } from "react";

function useIntersectionObserver(
  ref: React.RefObject<Element>, // Type for ref
  options: IntersectionObserverInit = { threshold: 0.5 } // Type for options
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}

export default useIntersectionObserver;
