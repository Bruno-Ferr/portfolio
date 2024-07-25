import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        brand: {
          primary_500: '#8A42DB',
          primary_400: '#9955E8',
          secondary: '#7DFFAF',
        },
        surface: {
          background: '#171023',
          primary: '#2C243B',
          secondary: '#413A4F',
          tertiary: '#4E4563',
        },
        text: {
          primary: '#F5F6F6',
          secondary: '#CDD0D4'
        }
      },
      height: {
        82: '350px'
      },
      boxShadow: {
        'primary': '0 0px 20px 5px rgba(125, 255, 175, 0.24)',
      }
    },
  },
  plugins: [],
};
export default config;
