import { Card } from "@/components";
import { Library1 } from "@/assets/Images";
import { Heading, Text } from "../typography";
const Review = () => (
  <section
    id="review"
    className="gap-4 grid grid-cols-6 grid-rows-2 pt-12 pb-4 snap-end"
  >
    <Card
      image={Library1}
      alt="Cover Image"
      size="width"
      type="text"
      title={
        <Heading
          type="h2"
          text="Hear What Our Users Are Saying About Serenity"
        />
      }
    />
    <Card image={Library1} alt="Cover Image" size="square" type="cover" />
    <Card
      image={Library1}
      alt="Cover Image"
      size="rectangle"
      type="text"
      title={
        <Text
          type="p"
          text="Serenity has been my go-to app for unwinding after a long day. The curated playlists are amazing, and the app is so easy to use."
        />
      }
    />
    <Card
      image={Library1}
      alt="Cover Image"
      size="rectangle"
      type="text"
      title={
        <Text
          type="p"
          text="I struggle with sleep anxiety, but listening to Serenity's sleep soundscapes has been a game-changer. I finally feel like I can relax and drift off to sleep peacefully."
        />
      }
    />{" "}
  </section>
);

export default Review;
