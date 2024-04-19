/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-light': '#222222',
       // 'green-neon': '#26FF02',
        'green-neon': '#d8e94d',
        'grey-grey': 'A8A8A8'
      }
    },
  },
  plugins: [],
}

