import { Hero, About, Product, Team, Review } from "@/components/container";

const HomePage = () => (
  <div className="flex flex-col">
    <Hero />
    <About />
    <Product />
    <Team />
    <Review />
  </div>
);

export default HomePage;
