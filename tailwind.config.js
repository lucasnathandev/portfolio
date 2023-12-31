/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "green-blur-pulse": {
          "0%": { opacity: 0 },
          "25%": { filter: "drop-shadow(0 0 4px #02B875)" },
          "45%": { filter: "drop-shadow(0 0 12px #02B875)" },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "green-blur-pulse": "green-blur-pulse 1.5s ease-in-out infinite",
      },
      textColor: {
        myrtle_green: {
          DEFAULT: "#4a6c6f",
          100: "#0f1516",
          200: "#1d2b2c",
          300: "#2c4042",
          400: "#3b5658",
          500: "#4a6c6f",
          600: "#649195",
          700: "#89adb1",
          800: "#b1c9cb",
          900: "#d8e4e5",
        },
        "anti-flash_white": {
          DEFAULT: "#edf2f4",
          100: "#24353b",
          200: "#496a77",
          300: "#759bab",
          400: "#b1c6cf",
          500: "#edf2f4",
          600: "#f0f4f6",
          700: "#f4f7f8",
          800: "#f7fafa",
          900: "#fbfcfd",
        },
        engineering_orange: {
          DEFAULT: "#d00000",
          100: "#2a0000",
          200: "#540000",
          300: "#7d0000",
          400: "#a70000",
          500: "#d00000",
          600: "#ff0e0e",
          700: "#ff4a4a",
          800: "#ff8787",
          900: "#ffc3c3",
        },
        oxford_blue: {
          DEFAULT: "#0e1428",
          100: "#030408",
          200: "#060811",
          300: "#090d19",
          400: "#0c1121",
          500: "#0e1428",
          600: "#26376d",
          700: "#3e58b0",
          800: "#798dd0",
          900: "#bcc6e7",
        },
        caribbean_current: {
          DEFAULT: "#00798c",
          100: "#00181c",
          200: "#003037",
          300: "#004853",
          400: "#005f6e",
          500: "#00798c",
          600: "#00b8d4",
          700: "#20e1ff",
          800: "#6aebff",
          900: "#b5f5ff",
        },
      },
      backgroundColor: {
        myrtle_green: {
          DEFAULT: "#4a6c6f",
          100: "#0f1516",
          200: "#1d2b2c",
          300: "#2c4042",
          400: "#3b5658",
          500: "#4a6c6f",
          600: "#649195",
          700: "#89adb1",
          800: "#b1c9cb",
          900: "#d8e4e5",
        },
        "anti-flash_white": {
          DEFAULT: "#edf2f4",
          100: "#24353b",
          200: "#496a77",
          300: "#759bab",
          400: "#b1c6cf",
          500: "#edf2f4",
          600: "#f0f4f6",
          700: "#f4f7f8",
          800: "#f7fafa",
          900: "#fbfcfd",
        },
        engineering_orange: {
          DEFAULT: "#d00000",
          100: "#2a0000",
          200: "#540000",
          300: "#7d0000",
          400: "#a70000",
          500: "#d00000",
          600: "#ff0e0e",
          700: "#ff4a4a",
          800: "#ff8787",
          900: "#ffc3c3",
        },
        oxford_blue: {
          DEFAULT: "#0e1428",
          100: "#030408",
          200: "#060811",
          300: "#090d19",
          400: "#0c1121",
          500: "#0e1428",
          600: "#26376d",
          700: "#3e58b0",
          800: "#798dd0",
          900: "#bcc6e7",
        },
        caribbean_current: {
          DEFAULT: "#00798c",
          100: "#00181c",
          200: "#003037",
          300: "#004853",
          400: "#005f6e",
          500: "#00798c",
          600: "#00b8d4",
          700: "#20e1ff",
          800: "#6aebff",
          900: "#b5f5ff",
        },
      },
    },
  },
  plugins: [],
};
