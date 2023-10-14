import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      alata: ["var(--font-Alata)"],
      saira_extra_condensed: ["var(--font-saira_extra_condensed)"],
    },
  },
  // animation: {
  //   "animate-infinite-scroll": "infinite-scroll 25s linear infinite",
  // },
  // keyframes: {
  //   "animate-infinite-scroll": {
  //     from: { transform: "translateX(0)" },
  //     to: { transform: "translateX(-100%)" },
  //   },
  // },
  plugins: [],
};
export default config;
