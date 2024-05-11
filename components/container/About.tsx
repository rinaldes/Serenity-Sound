import { Card } from "@/components";
import {
  CoverImage,
  Studio,
  Library1,
  Library2,
  Image1,
} from "@/assets/Images";
import Logo from "@/assets/Logo";
import { Heading, Text } from "../typography";

const About = () => (
  <section
    id="about"
    className="gap-4 grid grid-cols-6 grid-rows-2 pt-12 pb-2 snap-end"
  >
    <Card
      image={Studio}
      alt="Cover Image"
      size="width"
      type="text"
      title={<Logo type="large" variant="width" />}
    />
    <Card image={Image1} alt="Cover Image" size="square" type="cover" />
    <Card image={Library1} alt="Cover Image" size="square" type="cover" />
    <Card
      image={Library1}
      alt="Cover Image"
      size="width"
      type="text"
      title={
        <div className="px-8">
          <Heading type="h3" text="Crafted with Care by Serenity" />
          <br />
          <Text
            type="p"
            text="Serenity is more than just a music app; it's a passionate team of music lovers dedicated to creating a space for peace and rejuvenation. We believe in the power of music to uplift, inspire, and آرامش (āramish) - a Farsi word for peace and tranquility."
          />
          <Text
            type="p"
            text="Our team of curators meticulously crafts playlists that cater to a variety of moods and needs.  We source music from all corners of the globe, ensuring you have a diverse and calming soundscape to explore."
          />
        </div>
      }
    />
  </section>
);

export default About;
