import { dark } from "@clerk/themes";

/**
 * Dark theme for Clerk modals (sign-in, sign-up) that matches the app's color palette.
 * Uses Clerk's prebuilt `dark` theme as a base, then overrides variables to match
 * this app's `.dark` palette from `app/globals.css` with the same orange primary color.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkModalAppearance = {
  theme: dark,
  variables: {
    // Primary brand color - matches the app's primary color (--primary)
    colorPrimary: "oklch(0.6576 0.1208 252.0832)",
    colorPrimaryForeground: "oklch(1.0000 0 0)",

    // Background and foreground colors - matches the app's dark theme
    colorBackground: "oklch(0.1776 0 0)",
    colorForeground: "oklch(0.7905 0.0126 259.8241)",

    // Card and surface colors - matches the app's card colors
    colorCard: "oklch(0.2638 0.0024 247.9155)",
    colorCardForeground: "oklch(0.9755 0.0045 258.3245)",

    // Input field colors - matches the app's input colors
    colorInput: "oklch(0.4217 0.0084 248.0280)",
    colorInputForeground: "oklch(0.7905 0.0126 259.8241)",

    // Secondary colors - matches the app's secondary colors
    colorSecondary: "oklch(0.9774 0.0042 236.4961)",
    colorSecondaryForeground: "oklch(0.3046 0.0023 247.9001)",

    // Muted colors for subtle elements
    colorMuted: "oklch(0.2171 0.0025 247.9411)",
    colorMutedForeground: "oklch(0.7559 0.0125 239.9659)",

    // Accent colors
    colorAccent: "oklch(0.2038 0.0067 258.3676)",
    colorAccentForeground: "oklch(0.9590 0.0059 239.8204)",

    // Border colors
    colorBorder: "oklch(0.3506 0.0066 248.0169)",

    // Shadow and ring colors
    colorRing: "oklch(0.6576 0.1208 252.0832)",

    // Typography
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

    // Border radius to match app's design
    borderRadius: "0.5rem",
    borderRadiusSmall: "0.3rem",
    borderRadiusLarge: "0.7rem",
  },
  elements: {
    // Ensure consistent spacing and typography
    formButtonPrimary: {
      backgroundColor: "oklch(0.6576 0.1208 252.0832)",
      color: "oklch(1.0000 0 0)",
      "&:hover": {
        backgroundColor: "oklch(0.60 0.1208 252.0832)",
      },
      "&:active": {
        backgroundColor: "oklch(0.55 0.1208 252.0832)",
      },
    },
    formButtonReset: {
      backgroundColor: "oklch(0.4217 0.0084 248.0280)",
      color: "oklch(0.7905 0.0126 259.8241)",
      borderColor: "oklch(0.3506 0.0066 248.0169)",
      "&:hover": {
        backgroundColor: "oklch(0.46 0.0084 248.0280)",
      },
    },
    card: {
      backgroundColor: "oklch(0.2638 0.0024 247.9155)",
      borderColor: "oklch(0.3506 0.0066 248.0169)",
    },
    headerTitle: {
      color: "oklch(0.9755 0.0045 258.3245)",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    headerSubtitle: {
      color: "oklch(0.7559 0.0125 239.9659)",
    },
    socialButtonsBlockButton: {
      backgroundColor: "oklch(0.4217 0.0084 248.0280)",
      color: "oklch(0.7905 0.0126 259.8241)",
      borderColor: "oklch(0.3506 0.0066 248.0169)",
      "&:hover": {
        backgroundColor: "oklch(0.46 0.0084 248.0280)",
      },
    },
    formFieldInput: {
      backgroundColor: "oklch(0.4217 0.0084 248.0280)",
      color: "oklch(0.7905 0.0126 259.8241)",
      borderColor: "oklch(0.3506 0.0066 248.0169)",
      "&:focus": {
        borderColor: "oklch(0.6576 0.1208 252.0832)",
        boxShadow: "0 0 0 1px oklch(0.6576 0.1208 252.0832)",
      },
    },
    footerActionLink: {
      color: "oklch(0.6576 0.1208 252.0832)",
      "&:hover": {
        color: "oklch(0.60 0.1208 252.0832)",
      },
    },
  },
} as const;
