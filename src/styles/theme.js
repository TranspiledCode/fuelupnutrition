// src/styles/theme.js
const theme = {
  colors: {
    primary: '#22c55e', // green-500
    primaryDark: '#166534', // green-600
    primaryLight: '#dcfce7', // green-100
    secondary: '#facc15', // yellow-300
    secondaryLight: '#fefce8', // yellow-50
    pink: {
      light: '#fce7f3', // pink-100
      main: '#db2777', // pink-600
      hover: '#be185d', // pink-700
    },
    orange: {
      light: '#ffedd5', // orange-100
      main: '#ea580c', // orange-600
      hover: '#c2410c', // orange-700
    },
    purple: {
      light: '#f3e8ff', // purple-100
      main: '#7e22ce', // purple-700
    },
    blue: {
      light: '#eff6ff', // blue-50
      main: '#2563eb', // blue-600
      dark: '#1e3a8a', // blue-900
    },
    text: {
      primary: '#1f2937', // gray-800
      secondary: '#4b5563', // gray-600
      light: '#9ca3af', // gray-400
    },
    white: '#ffffff',
    gradients: {
      hero: 'linear-gradient(to right, #f97316, #ec4899, #8b5cf6)', // orange-400, pink-500, purple-500
    },
  },
  fonts: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  breakpoints: {
    md: '768px',
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    32: '8rem',
  },
  borderRadius: {
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  transitions: {
    default: '300ms ease',
  },
};

export default theme;
