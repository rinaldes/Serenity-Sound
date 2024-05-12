import "styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "config/site";
import { bodyFont } from "@/config/fonts";
import { Aside, Navbar, Footer } from "@/components/layout";

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
    <head />
    <body className={`${bodyFont.variable} font-body bg-white-lavender`}>
      <div className="flex h-screen">
        <div className="w-1/12 flex-row">
          <Aside />
        </div>
        <div className="w-11/12 max-w-11/12 pr-12 mb-16">
          <main className="h-full max-w-full rounded-3xl">
            <div
              className="overflow-y-auto h-full snap-y snap-mandatory"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex flex-col">
                <Navbar />
                {children}
              </div>
            </div>
          </main>
          <div className="w-full pl-4 pr-8">
            <Footer />
          </div>
        </div>
      </div>
    </body>
  </html>
);

export default RootLayout;
