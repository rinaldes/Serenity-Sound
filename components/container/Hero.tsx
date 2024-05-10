import { Card } from "@/components";
import { CoverImage } from "@/assets/Images";

const Hero = () => (
  <section id="home" className="gap-4 grid grid-cols-6 mt-8 snap-end">
    <Card image={CoverImage} alt="Cover Image" size="cover" type="cover" />
  </section>
);

export default Hero;
