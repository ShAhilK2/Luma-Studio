import { dark } from "@clerk/themes";

/**
 * Dark + brand colors for `<PricingTable />` and billing checkout.
 * Uses Clerk’s prebuilt `dark` theme, then overrides variables to match
 * this app’s `.dark` palette (see `app/globals.css`) and orange primary.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkPricingAppearance = {
  theme: dark,
  variables: {
    colorPrimary: "oklch(0.6576 0.1208 252.0832)",
    colorPrimaryForeground: "oklch(1.0000 0 0)",
    colorBackground: "oklch(0.1776 0 0)",
    colorForeground: "oklch(0.7905 0.0126 259.8241)",
    colorInput: "oklch(0.4217 0.0084 248.0280)",
    colorInputForeground: "oklch(0.7905 0.0126 259.8241)",
    colorNeutral: "oklch(0.7559 0.0125 239.9659)",
  },
} as const;
