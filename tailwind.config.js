/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#23bd47', // Primary Green
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#41c1ba', // Cyan
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#c1ff72', // Lime
          foreground: '#1F2937',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1F2937',
        },
        white: '#fefefe',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(35, 189, 71, 0.1), 0 2px 4px -1px rgba(35, 189, 71, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(35, 189, 71, 0.15), 0 10px 10px -5px rgba(35, 189, 71, 0.08)',
        'glow': '0 0 15px rgba(65, 193, 186, 0.5)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};