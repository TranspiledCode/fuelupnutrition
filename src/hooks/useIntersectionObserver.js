// src/hooks/useIntersectionObserver.js
import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook that observes when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - A number between 0 and 1 indicating the percentage of the target element that needs to be visible
 * @param {string|Element} options.root - The element that is used as the viewport for checking visibility of the target
 * @param {string} options.rootMargin - Margin around the root element
 * @returns {Array} [ref, isIntersecting, entry] - A ref to attach to the target element, whether the element is intersecting, and the full IntersectionObserverEntry
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
} = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Check if IntersectionObserver is available and if we have a valid element
    if (
      !element ||
      typeof window === 'undefined' ||
      // eslint-disable-next-line
      !('IntersectionObserver' in window)
    ) {
      // Fallback for browsers that don't support IntersectionObserver
      setIsIntersecting(true);
      return;
    }

    //  eslint-disable-next-line
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);

        // If the element has been seen, we can disconnect the observer
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return [elementRef, isIntersecting, entry];
};

export default useIntersectionObserver;
