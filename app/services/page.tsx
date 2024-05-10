import { Aside, Footer } from "@/components/layout";
import { Navbar } from "@nextui-org/navbar";
import { Hero, About, Product, Team, Review } from "@/components/container";

export default function ServicesPage() {
  return (
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
              <div className="flex flex-col">
                <Hero />
                <About />
                <Product />
                <Team />
                <Review />
              </div>
            </div>
          </div>
        </main>
        <div className="w-full pl-4 pr-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
