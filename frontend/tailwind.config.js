/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        page: "#F9FAFB",
        textMain: "#111827",
        textMuted: "#6B7280",
      },
    },
  },
  plugins: [],
}

