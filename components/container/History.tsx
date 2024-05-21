import { Card } from "@/components";
import { Library1, Walking } from "@/assets/Images";
import { Heading, Text } from "../typography";
const History = () => (
  <section
    id="history"
    className="gap-5 grid md:grid-cols-6 md:grid-rows-2 pt-8"
  >
    <Card
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text="A Journey Towards Serenity" />
          <br />
          <Text
            type="p"
            text="Serenity wasn't born in a boardroom; it stemmed from a shared passion for music's ability to soothe the soul. Rindu, our founders, felt the need for a music platform dedicated to relaxation in our fast-paced world."
            className="hidden md:block"
          />
          <Text
            type="p"
            text="Stemmed from a passion for music's ability to soothe the soul and the need for a platform to relaxation in our fast-paced world."
            className="block md:hidden"
          />
        </div>
      }
    />
    <Card
      image={Walking}
      alt="A girl listening music on the way"
      size="square"
      type="image"
    />
    <Card
      size="rectangle"
      type="text"
      content={
        <>
          <Text
            type="p"
            text="We started with a small collection of calming playlists, meticulously crafted to ease stress and promote peace. As our community grew, so did our vision. We assembled a team of music experts, audio specialists, and app developers, all driven by a common goal: to curate a sonic sanctuary for all."
            className="hidden lg:block"
          />
          <Text
            type="p"
            text="Started from small, crafted playlists to ease stress and promote peace. As our community grew, we assembled a team of music experts, audio specialists, and app developers, driven by a goal to curate a sanctuary."
            className="block lg:hidden"
          />
        </>
      }
    />
    <Card
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
