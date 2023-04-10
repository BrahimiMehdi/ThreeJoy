/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        down:{
        '0%, 100%': { transform: 'translateY(2.5rem)' },
        '50%': { transform: 'translateY(3.5rem)' },
        },
      },
      animation: {
        down: 'down 2s ease-in-out infinite',
      },
      colors: {
        // Complementary color to the main red, used for accents and secondary elements
        "main-red": "#de313a",
        // Main color of the brand, used for important elements and calls to action
        "dark-red": "#FF5252",
        "main-yellow": "#fff275 ",
        // Used for highlights and attention-grabbing elements
        "main-orange": "#fc7c55",
        // Used for playful and energetic elements, such as game-related graphics or illustrations
        "main-green" :"#64DD17 ",
        // Used for friendly and welcoming elements, such as customer service or social media icons
        "pink":"#f8517f",
        "dark-gray": "#1F1F1F",
        // Used for fresh and approachable elements, such as buttons or navigational elements
        "light-blue": "#00B8D4 ",
      },
    },
  },
  plugins: [],
}

