import "styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "config/site";
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

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body className={`${bodyFont.variable} font-body bg-white-lavender`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
