import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook that listens for hash changes in the URL and scrolls to the element with the corresponding id.
 *
 * It uses the `useLocation` hook from `react-router-dom` to listen for location changes.
 *
 * When the location's hash changes, it uses `document.querySelector` to get the element with the corresponding
 * id and scrolls to it using `scrollIntoView`.
 *
 * @returns {null} This hook does not render anything.
 * Example usage:
 *
 * ```jsx
 * import ScrollToHash from './ScrollToHash';
 *
 * function App() {
 *   return (
 *     <div>
 *       <ScrollToHash />
 *     </div>
 *   );
 * }
 * ```
 */

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
