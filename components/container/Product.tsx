import { Card } from "@/components";
import { Library2, TheApp } from "@/assets/Images";
import { Heading, Text } from "../typography";
const Product = () => (
  <section
    id="product"
    className="gap-4 grid grid-cols-6 grid-rows-2 pt-12 pb-4 snap-end"
  >
    <Card image={Library2} alt="Cover Image" size="square" type="cover" />
    <Card
      image={Library2}
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Your Music Sanctuary Awaits" />
          <br />
          <Text
            type="p"
            text="Serenity is the music streaming app designed to help you unwind, de-stress, and find moments of peace in your day.  Our curated playlists are meticulously crafted by music experts to soothe your soul and elevate your mood."
          />
        </div>
      }
    />
    <Card
      image={Library2}
      alt="Cover Image"
      size="square"
      type="text"
      content={
        <div>
          <Heading type="h2" text="Serenity Music" />
          <br />
          <Text
            type="p"
            text="Personalized playlists for different moods and activities"
          />
        </div>
      }
    />
    <Card image={TheApp} alt="Cover Image" size="square" type="cover" />
    <Card
      image={Library2}
      alt="Cover Image"
      size="square"
      type="text"
      content={
        <div>
          <Heading type="h2" text="Get Your Journey with Serenity Now" />
        </div>
      }
    />
  </section>
);

export default Product;
