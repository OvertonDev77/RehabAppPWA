import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
        "dm-sans": ["var(--font-dm-sans)"],
      },
      colors: {
        // Modern Minimalist Theme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(0 0% 100%)", // Pure white
        foreground: "hsl(0 0% 9%)", // Near black
        primary: {
          DEFAULT: "hsl(262 83% 58%)", // Single vibrant purple accent
          foreground: "hsl(0 0% 100%)",
          50: "hsl(262 83% 97%)",
          100: "hsl(262 83% 94%)",
          200: "hsl(262 83% 87%)",
          300: "hsl(262 83% 78%)",
          400: "hsl(262 83% 68%)",
          500: "hsl(262 83% 58%)",
          600: "hsl(262 83% 48%)",
          700: "hsl(262 83% 38%)",
          800: "hsl(262 83% 28%)",
          900: "hsl(262 83% 18%)",
        },
        secondary: {
          DEFAULT: "hsl(0 0% 96%)", // Light gray
          foreground: "hsl(0 0% 9%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 96%)",
          foreground: "hsl(0 0% 9%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 96%)",
          foreground: "hsl(0 0% 45%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(0 0% 9%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(0 0% 9%)",
        },
        // Grayscale palette
        gray: {
          50: "hsl(0 0% 98%)",
          100: "hsl(0 0% 96%)",
          200: "hsl(0 0% 93%)",
          300: "hsl(0 0% 88%)",
          400: "hsl(0 0% 64%)",
          500: "hsl(0 0% 45%)",
          600: "hsl(0 0% 32%)",
          700: "hsl(0 0% 25%)",
          800: "hsl(0 0% 15%)",
          900: "hsl(0 0% 9%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
