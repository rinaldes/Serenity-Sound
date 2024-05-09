import "styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "config/site";
import { Providers } from "./providers";
import { bodyFont } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body className={`${bodyFont.variable}`}>
      <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
