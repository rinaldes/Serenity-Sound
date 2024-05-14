import { Card } from "@/components";
import { Library1, Walking } from "@/assets/Images";
import { Heading, Text } from "../typography";
const History = () => (
  <section
    id="history"
    className="gap-5 grid grid-cols-6 grid-rows-2 pt-12 pb-4 snap-end"
  >
    <Card
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text="A Journey Towards Serenity" />
          <br />
          <Text
            type="p"
            text="Serenity wasn't born in a boardroom; it stemmed from a shared passion for music's ability to soothe the soul. [Founders' Names], our founders, [briefly describe the inspiration behind creating Serenity - e.g.,  felt the need for a music platform dedicated to relaxation in our fast-paced world]."
          />
        </div>
      }
    />
    <Card image={Walking} alt="Cover Image" size="square" type="image" />
    <Card
      alt="Cover Image"
      size="rectangle"
      type="text"
      content={
        <Text
          type="p"
          text="We started with a small collection of calming playlists, meticulously crafted to ease stress and promote peace. As our community grew, so did our vision. We assembled a team of music experts, audio specialists, and app developers, all driven by a common goal: to curate a sonic sanctuary for all."
        />
      }
    />
    <Card
      image={Library1}
      alt="Cover Image"
      size="rectangle"
      type="text"
      content={
        <Text
          type="p"
          text="Today, Serenity offers a vast library of music, personalized features, and a user-friendly app to help you find moments of calm in your everyday life."
        />
      }
    />
  </section>
);

export default History;
