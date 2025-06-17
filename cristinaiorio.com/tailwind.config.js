module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f0f7ff",
          100: "#e3efff",
          600: "#3b82f6",
          800: "#1e40af",
        }
      },
      boxShadow: {
        "custom": "0 4px 15px 0 rgba(49, 130, 206, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
