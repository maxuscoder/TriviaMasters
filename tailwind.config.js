/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Kode Mono", "sans-serif"],
      serif: ["Kode Mono", "serif"],
      mono: ["Kode Mono", "monospace"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      screens: {
        mdsm: "774px",
      },
    },
  },
  plugins: [],
};
