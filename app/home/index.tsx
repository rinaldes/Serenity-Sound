import { Hero, About, Product, Review } from "@/components/container";

const HomePage = () => (
  <div className="flex flex-col px-4">
    <Hero />
    <About />
    <Product />
    <Review />
  </div>
);

export default HomePage;
