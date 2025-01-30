/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins', 'sans-serif'],
        'heading': ['Georama', 'serif'],
        'subheading': ['Gilda Display', 'sans-serif'],
        'home': ['Maven Pro', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      maxWidth: {
        '8xl': '90rem',  // Add custom width as needed
        '9xl': '100rem', // Another example
        '10xl': '110rem', // Yet another example
      },
      colors: {
        godrejgreen1:'#E4FBE4',
        godrejgreen2:'#294B29',
        godrejgreen3:'#E4FBE4BF',

        trimayablue1:"#0F2938",
      },
      opacity: {
        '10': '0.10',
        '22': '0.22',
        '78': '0.78',
        '90': '0.90',
      },
    },
  },
  plugins: [],
}
