import "styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { bodyFont } from "@/config/fonts";
import { Aside, Navbar, Footer } from "@/components/layout";
import { ModalProvider } from "@/contexts/Modal";

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

/*
  TODO: You must be kidding, lol! Don't forget to Simplyfied this!
*/

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${bodyFont.variable} font-body bg-white-lavender flex h-screen w-screen`}
    >
      <div className="hidden lg:block lg:w-1/12 flex-row">
        <Aside type="page" />
      </div>
      <div className="w-full max-w-full lg:w-5/6">
        <ModalProvider>
          <main
            className="overflow-y-auto h-full max-w-full"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex flex-col">
              <Navbar />
              <div className="px-6">{children}</div>
              <Footer />
            </div>
          </main>
        </ModalProvider>
      </div>
      <div className="hidden lg:block lg:w-1/12 flex-row">
        <Aside type="social" />
      </div>
    </body>
  </html>
);

export default RootLayout;
