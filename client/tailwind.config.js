/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            "custom-yellow" : "#F4CE14",
            "custom-green": "#495E57",
            "custom-grey": "#45474B",
            "custom-white": "#F5F7F8"

        }
      },
    },
    plugins: [],
  }