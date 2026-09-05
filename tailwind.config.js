/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0111A2',         // Primary Blue
          blueSecondary: '#1638C8', // Secondary Blue
          orange: '#E86A1C',       // Accent Orange
          white: '#FFFFFF',        // White
          bgLight: '#F5F7FA',      // Light Background
          bgSoftBlue: '#EEF2FF',   // Soft Blue Background
          textDark: '#111827',     // Dark Text
          textSecondary: '#5B6475',// Secondary Text
          border: '#E2E6EF',       // Border
          navy: '#000E2E',         // Dark Navy Footer
          dark: '#00071A',
        }
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
        'card-lg': '16px',
      },
      transitionTimingFunction: {
        'premium-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
