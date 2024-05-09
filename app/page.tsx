import { Aside, Footer, Navbar } from "components/layout";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/12 flex-row">
        <Aside />
      </div>
      <div className="w-11/12 pr-12">
        <Navbar />
        <main className="h-4/5 bg-slate-400 rounded-2xl">
          <div
            className="overflow-y-auto h-full"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex flex-col">tehe</div>
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
