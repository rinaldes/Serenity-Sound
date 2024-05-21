import { Card } from "@/components";
import { CoverImage, CoverMobile } from "@/assets/Images";

const Hero = () => (
  <section id="home">
    <Card
      image={
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 768px)").matches
          ? CoverImage
          : CoverMobile
      }
      alt="A girl listening music with Serenity anywhere"
      size="cover"
      type="cover"
    />
  </section>
);

export default Hero;
