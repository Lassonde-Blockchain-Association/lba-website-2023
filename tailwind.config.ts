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
<<<<<<< HEAD
  },
  animation: {
    "animate-infinite-scroll": "infinite-scroll 25s linear infinite",
  },
  keyframes: {
    "animate-infinite-scroll": {
      from: { transform: "translateX(0)" },
      to: { transform: "translateX(-100%)" },
    },
=======
>>>>>>> db86eb3be4d45f0fe2b2041f35200ce9f5822f41
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
