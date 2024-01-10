module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e8e8e8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
