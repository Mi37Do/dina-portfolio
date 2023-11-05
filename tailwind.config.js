/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2218a7',
          secondary: '#737ccf',
          accent: '#bbc4eb',
          neutral: '#e1e5f8',
          'base-100': '#ffffff'
        }
      }
    ]
  }
}
