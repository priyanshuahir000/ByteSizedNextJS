export const theme = {
  colors: {
    // Primary colors
    primary: {
      main: "#3B82F6", // blue-500
      light: "#60A5FA", // blue-400
      dark: "#2563EB", // blue-600
      text: "#FFFFFF",
    },
    // Secondary colors
    secondary: {
      main: "#6366F1", // indigo-500
      light: "#818CF8", // indigo-400
      dark: "#4F46E5", // indigo-600
      text: "#FFFFFF",
    },
    // Semantic colors
    success: {
      main: "#10B981", // emerald-500
      light: "#34D399", // emerald-400
      dark: "#059669", // emerald-600
      text: "#FFFFFF",
    },
    error: {
      main: "#EF4444", // red-500
      light: "#F87171", // red-400
      dark: "#DC2626", // red-600
      text: "#FFFFFF",
    },
    warning: {
      main: "#F59E0B", // amber-500
      light: "#FBBF24", // amber-400
      dark: "#D97706", // amber-600
      text: "#FFFFFF",
    },
    info: {
      main: "#3B82F6", // blue-500
      light: "#60A5FA", // blue-400
      dark: "#2563EB", // blue-600
      text: "#FFFFFF",
    },
    // Neutral colors - changed text colors to white
    neutral: {
      main: "#6B7280", // gray-500
      light: "#1F2937", // dark background for light text
      dark: "#111827", // gray-900
      background: "#111827", // dark background
      card: "#1F2937", // dark card background
      text: {
        primary: "#FFFFFF", // changed to white
        secondary: "#FFFFFF", // changed to white
        disabled: "#9CA3AF", // gray-400
      },
      border: "#374151", // gray-700
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    xl: "1rem",
    full: "9999px",
  },
  typography: {
    fontFamily: {
      sans: 'var(--font-sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
      mono: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xxl: "1.5rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  // Provide light and dark mode color schemes
  darkMode: {
    neutral: {
      main: "#9CA3AF", // gray-400
      light: "#1F2937", // gray-800
      dark: "#F9FAFB", // gray-50
      background: "#111827", // gray-900
      card: "#1F2937", // gray-800
      text: {
        primary: "#FFFFFF", // changed to white
        secondary: "#FFFFFF", // changed to white
        disabled: "#9CA3AF", // gray-400
      },
      border: "#374151", // gray-700
    },
  },
};

export default theme;
