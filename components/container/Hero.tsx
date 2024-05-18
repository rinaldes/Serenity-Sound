import { Card } from "@/components";
import { CoverImage } from "@/assets/Images";

const Hero = () => (
  <section
    id="home"
    className="gap-5 grid md:grid-cols-6 mt-4 md:mt-8 lg:snap-end"
  >
    <Card image={CoverImage} alt="Cover Image" size="cover" type="cover" />
  </section>
);

export default Hero;
