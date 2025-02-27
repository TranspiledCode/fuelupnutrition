import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook that listens for route changes and scrolls to the top of the page.
 *
 * It uses the `useLocation` hook from `react-router-dom` to listen for location changes.
 *
 * When the location's path changes, it uses `window.scrollTo` to scroll to the top
 * of the page.
 *
 * @returns {null} This hook does not render anything.
 * Example usage:
 *
 * ```jsx
 * import RouteToTop from './RouteToTop';
 *
 * function App() {
 *   return (
 *     <div>
 *       <RouteToTop />
 *     </div>
 *   );
 * }
 * ```
 */

const RouteToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default RouteToTop;
