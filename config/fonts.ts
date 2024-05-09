import { Montserrat, Lora } from "next/font/google";

export const bodyFont = Lora({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-body",
});

export const titleFont = Montserrat({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-title",
});
