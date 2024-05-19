import { Card } from "@/components";
import { MusicShare, Library1, Image1 } from "@/assets/Images";
import Logo from "@/assets/Logo";
import { Heading, Text } from "../typography";

const About = () => (
  <section
    id="company"
    className="gap-5 grid md:grid-cols-6 md:grid-rows-2 pt-4 lg:pt-12 pb-4 lg:snap-end"
  >
    <Card
      alt="Cover Image"
      size="width"
      type="text"
      className="hidden md:block"
      content={<Logo type="large" variant="width" />}
    />
    <Card image={Image1} alt="Cover Image" size="square" type="image" />
    <Card
      image={MusicShare}
      alt="Cover Image"
      size="square"
      type="image"
      className="hidden md:block"
    />
    <Card
      image={Library1}
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Crafted with Care by Serenity" />
          <br />
          <Text
            type="p"
            text="Serenity is more than just a music app; it's a passionate team of music lovers dedicated to creating a space for peace and rejuvenation. We believe in the power of music to uplift, inspire, and آرامش (āramish) - a Farsi word for peace and tranquility."
            className="hidden md:block"
          />
          <Text
            type="p"
            text="Passionate team of music lovers dedicated to creating and believe in the music to uplift, inspire, peace and tranquility."
            className="block md:hidden"
          />
          <Text
            type="p"
            text="Our team of curators meticulously crafts playlists that cater to a variety of moods and needs.  We source music from all corners of the globe, ensuring you have a diverse and calming soundscape to explore."
            className="hidden lg:block"
          />
        </div>
      }
    />
  </section>
);

export default About;
