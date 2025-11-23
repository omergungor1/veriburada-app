/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BEFABE',
        },
        secondary: {
          DEFAULT: '#FBD7C3',
        },
        accent: {
          DEFAULT: '#FDF1B8',
        },
        info: {
          DEFAULT: '#C8E1FA',
        },
        purple: {
          DEFAULT: '#F0D1FF',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#090A0A',
        },
      },
    },
  },
  plugins: [],
}

