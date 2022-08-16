/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FBBF16",
        "light-yellow": "#F9F8CB",
        green: "#00C6AD",
        blue: "#1548E8",
        red: "#F85A2A",
        discord: "#5865F2",
        telegram: "#0088CC",
        whatsapp: "#25D366",
        signal: "#3976f0",
        twitter: "#00ACEE",
        facebook: "#3B5998",
        share: "#00C6AD",
        success: "#4BD8A0",
        fail: "#E03E3E",
        gray: "#CECECE",
      },
      scale: {
        "-1": "-1",
      },
      padding: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
