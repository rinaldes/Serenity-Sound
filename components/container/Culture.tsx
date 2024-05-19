import { Card } from "@/components";
import { Library1 } from "@/assets/Images";
import { Heading, Text } from "../typography";

const Culture = () => (
  <section
    id="about"
    className="gap-5 grid md:grid-cols-6 md:grid-rows-2 pt-4  pb-4"
  >
    <Card
      image={Library1}
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Cultivating Calm at Our Company" />
          <br />
          <Text
            type="p"
            text="At Serenity, we believe that a peaceful work environment fosters a more mindful approach to creating a peaceful app. We prioritize the well-being of our team members, fostering a culture of:"
            className="hidden md:block"
          />
          <Text
            type="p"
            text="We believe that a peaceful work environment fosters a more mindful approach to creating a peaceful app. "
            className="block md:hidden"
          />
        </div>
      }
    />
    <Card
      alt="Cover Image"
      size="square"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Music for the soul" />
          <br />
          <Text
            type="p"
            text="Our workspace is thoughtfully curated with calming music, reflecting the essence of our app and the positive impact we aim to create."
            className="block md:hidden lg:block"
          />
          <Text
            type="p"
            text="Thoughtfully curated calming music, reflecting the essence of the positive impact."
            className="hidden md:block lg:hidden"
          />
        </div>
      }
    />
    <Card
      alt="Cover Image"
      size="square"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Work Life Balance" />
          <br />
          <Text
            type="p"
            text="We encourage flexible schedules and breaks to promote relaxation and rejuvenation outside of work hours."
            className="block md:hidden lg:block"
          />
          <Text
            type="p"
            text="Flexible schedules and breaks for relaxation and rejuvenation outside of work hours."
            className="hidden md:block lg:hidden"
          />
        </div>
      }
    />
    <Card
      alt="Cover Image"
      size="square"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Mindfulness and wellness" />
          <br />
          <Text
            type="p"
            text="We offer programs and resources to support our team's mental and physical well-being, such as meditation apps or yoga classes."
            className="block md:hidden lg:block"
          />
          <Text
            type="p"
            text="Programs and resources to support our team's mental and physical well-being, such as meditation or yoga."
            className="hidden md:block lg:hidden"
          />
        </div>
      }
    />
    <Card
      alt="Cover Image"
      size="square"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Collaboration and creativity" />
          <br />
          <Text
            type="p"
            text="We foster a collaborative spirit where team members can openly share ideas and work together to bring serenity to life."
            className="block md:hidden lg:block"
          />
          <Text
            type="p"
            text="Collaborative spirit where team members can openly share ideas and work together to bring serenity to life."
            className="hidden md:block lg:hidden"
          />
        </div>
      }
    />
  </section>
);

export default Culture;
