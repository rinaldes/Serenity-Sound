import { Library2 } from "@/assets/Images";
import { Card } from "@/components";
import { Heading, Text } from "@/components/typography";

const Division = ({}) => (
  <section
    id="team"
    className="gap-5 grid grid-cols-6 grid-rows-2 pt-12 pb-4 snap-end"
  >
    <Card image={Library2} alt="Cover Image" size="square" type="image" />
    <Card
      image={Library2}
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Music Curator" />
          <Text
            type="p"
            text="A dedicated team with a discerning ear for calming melodies and a deep understanding of music's impact on mood. They meticulously craft playlists that cater to a variety of moods and needs"
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
          <Heading type="h2" text="Serenity Breathe" />
          <Text
            type="p"
            text="Take a deep breath and find moments of calm with our complimentary tier."
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
          <Heading type="h2" text="Serenity Unwind" />
          <Text
            type="p"
            text="Upgrade to Serenity Unwind and unlock a world of personalized peace."
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
          <Heading type="h2" text="Serenity Unwind" />
          <Text
            type="p"
            text="Upgrade to Serenity Unwind and unlock a world of personalized peace."
          />
        </div>
      }
    />
  </section>
);

export default Division;
