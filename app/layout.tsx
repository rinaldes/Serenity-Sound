import "styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { bodyFont } from "@/config/fonts";
import { Aside, Navbar, Footer } from "@/components/layout";
import { ModalProvider } from "@/contexts/Modal";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

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
    <body
      className={`${bodyFont.variable} font-body bg-white-lavender flex h-screen w-screen`}
    >
      <Aside type="page" />
      <div className="w-full lg:w-5/6 overflow-hidden">
        <ModalProvider>
          <Navbar />
          <ScrollShadow
            className={`overflow-y-auto h-[88vh]`}
            hideScrollBar
            size={20}
          >
            <div className="flex flex-col overflow-x-hidden">
              <div className="px-6">{children}</div>
              <Footer />
            </div>
          </ScrollShadow>
        </ModalProvider>
      </div>
      <Aside type="social" />
    </body>
  </html>
);

export default RootLayout;
