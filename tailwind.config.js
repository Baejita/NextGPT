/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        garden: {
          primary: "#F16D1D",
          secondary: "#0C396D",
          accent: "#199AD2",
          error: "#Ff2c2c",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#fff7f2",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        garden: {
          primary: "#F16D1D",
          secondary: "#0C396D",
          accent: "#199AD2",
          error: "#Ff2c2c",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#fff7f2",
        },
      },
      {
        coffee: {
          primary: "#f7fbff",
          secondary: "#0C396D",
          accent: "#199AD2",
          error: "#Ff2c2c",
          neutral: "#3d4451",
          "base-100": "#041e3d",
          "base-200": "#041e3d",
        },
      },
    ],
  },
};
