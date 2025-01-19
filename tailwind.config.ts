import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "deepBlue1": "#05014a",
        "deepBlue2": "#020079",
        "deepBlue3": "#0006b1",
        "deepBlue4": "#0013de",
        "deepBlue5": "#0021f3", 
      },
    },
  },
  plugins: [],
} satisfies Config;
