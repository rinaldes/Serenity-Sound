import { Card } from "@/components";
import { CoverImage, CoverMobile } from "@/assets/Images";

const Hero = () => (
  <section id="home">
    <article className="hidden md:block">
      <Card image={CoverImage} alt="Cover Image" size="cover" type="cover" />
    </article>
    <article className="block md:hidden">
      <Card image={CoverMobile} alt="Cover Image" size="cover" type="cover" />
    </article>
  </section>
);

export default Hero;
