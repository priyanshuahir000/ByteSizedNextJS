"use client";

import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary colors */
    --color-primary-main: ${theme.colors.primary.main};
    --color-primary-light: ${theme.colors.primary.light};
    --color-primary-dark: ${theme.colors.primary.dark};
    --color-primary-text: ${theme.colors.primary.text};
    
    /* Secondary colors */
    --color-secondary-main: ${theme.colors.secondary.main};
    --color-secondary-light: ${theme.colors.secondary.light};
    --color-secondary-dark: ${theme.colors.secondary.dark};
    --color-secondary-text: ${theme.colors.secondary.text};
    
    /* Semantic colors */
    --color-success-main: ${theme.colors.success.main};
    --color-success-light: ${theme.colors.success.light};
    --color-success-dark: ${theme.colors.success.dark};
    --color-success-text: ${theme.colors.success.text};
    
    --color-error-main: ${theme.colors.error.main};
    --color-error-light: ${theme.colors.error.light};
    --color-error-dark: ${theme.colors.error.dark};
    --color-error-text: ${theme.colors.error.text};
    
    --color-warning-main: ${theme.colors.warning.main};
    --color-warning-light: ${theme.colors.warning.light};
    --color-warning-dark: ${theme.colors.warning.dark};
    --color-warning-text: ${theme.colors.warning.text};
    
    --color-info-main: ${theme.colors.info.main};
    --color-info-light: ${theme.colors.info.light};
    --color-info-dark: ${theme.colors.info.dark};
    --color-info-text: ${theme.colors.info.text};
    
    /* Neutral colors */
    --color-neutral-main: ${theme.colors.neutral.main};
    --color-neutral-light: ${theme.colors.neutral.light};
    --color-neutral-dark: ${theme.colors.neutral.dark};
    --color-neutral-background: ${theme.colors.neutral.background};
    --color-neutral-card: ${theme.colors.neutral.card};
    --color-neutral-text-primary: ${theme.colors.neutral.text.primary};
    --color-neutral-text-secondary: ${theme.colors.neutral.text.secondary};
    --color-neutral-text-disabled: ${theme.colors.neutral.text.disabled};
    --color-neutral-border: ${theme.colors.neutral.border};
  }

  /* Dark mode styles using media query */
  @media (prefers-color-scheme: dark) {
    :root {
      /* Neutral colors for dark mode */
      --color-neutral-main: ${theme.darkMode.neutral.main};
      --color-neutral-light: ${theme.darkMode.neutral.light};
      --color-neutral-dark: ${theme.darkMode.neutral.dark};
      --color-neutral-background: ${theme.darkMode.neutral.background};
      --color-neutral-card: ${theme.darkMode.neutral.card};
      --color-neutral-text-primary: ${theme.darkMode.neutral.text.primary};
      --color-neutral-text-secondary: ${theme.darkMode.neutral.text.secondary};
      --color-neutral-text-disabled: ${theme.darkMode.neutral.text.disabled};
      --color-neutral-border: ${theme.darkMode.neutral.border};
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-neutral-background);
    color: #FFFFFF; /* Set text color to white */
    font-family: ${theme.typography.fontFamily.sans};
    font-size: ${theme.typography.fontSize.md};
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, textarea, select, label {
    color: #FFFFFF; /* Ensure all text elements are white */
  }

  /* Error notification styling */
  .error-message {
    background-color: var(--color-error-dark);
    color: #FFFFFF;
    border-left: 4px solid var(--color-error-main);
    padding: ${theme.spacing.md};
    margin: ${theme.spacing.md} 0;
    border-radius: ${theme.borderRadius.md};
    box-shadow: ${theme.shadows.sm};
  }

  /* Success notification styling */
  .success-message {
    background-color: var(--color-success-dark);
    color: #FFFFFF;
    border-left: 4px solid var(--color-success-main);
    padding: ${theme.spacing.md};
    margin: ${theme.spacing.md} 0;
    border-radius: ${theme.borderRadius.md};
    box-shadow: ${theme.shadows.sm};
  }

  /* Card styling */
  .card {
    background-color: var(--color-neutral-card);
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.lg};
    box-shadow: ${theme.shadows.md};
    border: 1px solid var(--color-neutral-border);
    color: #FFFFFF;
  }

  /* Button styling */
  button {
    border-radius: ${theme.borderRadius.md};
    font-weight: ${theme.typography.fontWeight.medium};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #FFFFFF;
  }

  .btn-primary {
    background-color: var(--color-primary-main);
    color: #FFFFFF;
    border: none;
  }

  .btn-primary:hover {
    background-color: var(--color-primary-dark);
  }

  .btn-secondary {
    background-color: var(--color-secondary-main);
    color: #FFFFFF;
    border: none;
  }

  .btn-secondary:hover {
    background-color: var(--color-secondary-dark);
  }

  /* Form elements */
  input, textarea, select {
    background-color: var(--color-neutral-light);
    color: #FFFFFF;
    border: 1px solid var(--color-neutral-border);
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-family: inherit;
    font-size: ${theme.typography.fontSize.md};
  }

  input::placeholder, textarea::placeholder, select::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  input:focus, textarea:focus, select:focus {
    outline: 2px solid var(--color-primary-light);
    border-color: var(--color-primary-main);
  }

  /* Links */
  a {
    color: #FFFFFF;
    text-decoration: underline;
  }

  a:hover {
    color: var(--color-primary-light);
  }

  /* Accessibility focus styles */
  *:focus-visible {
    outline: 2px solid var(--color-primary-main);
    outline-offset: 2px;
  }

  /* Force white text globally */
  * {
    color-scheme: dark;
  }

  /* Profile page specific styles */
  .profile-container {
    background-color: var(--color-neutral-background);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.lg};
  }

  .profile-card {
    background-color: var(--color-neutral-card);
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.lg};
    box-shadow: ${theme.shadows.md};
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid var(--color-neutral-border);
  }

  .profile-info {
    margin: ${theme.spacing.md} 0;
  }

  .profile-info .user-detail {
    background-color: rgba(55, 65, 81, 0.5);
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.sm};
  }

  .profile-info .user-detail p {
    color: #FFFFFF;
  }

  .profile-info .user-detail p:first-child {
    color: #D1D5DB;
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing.xs};
  }

  /* Force white text for specific Tailwind classes that might override our colors */
  .text-gray-300, .text-gray-400, .text-gray-500, .text-gray-600, .text-gray-700, .text-gray-800, .text-gray-900 {
    color: #FFFFFF !important;
  }

  /* Force light text for headings in profile that might have color overrides */
  h1.text-3xl, h1.text-4xl, h2.text-2xl, h2.text-3xl {
    color: #FFFFFF !important;
  }
`;

export default GlobalStyles;
