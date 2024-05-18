import { Button, Card } from "@/components";
import { Library2, TheApp } from "@/assets/Images";
import { Heading, Text } from "../typography";
const Product = () => (
  <section
    id="product"
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
          <Text type="p" text="Vast library of calming music" />
          <Text type="p" text="High-fidelity audio quality" />
          <Text type="p" text="Sleep timers and relaxation tools" />
        </div>
      }
    />
    <Card image={TheApp} alt="Cover Image" size="square" type="image" />
    <Card
      alt="Cover Image"
      size="square"
      type="text"
      content={
        <div className="flex flex-col text-center items-center">
          <Heading type="h3" text="Get Your Journey with Serenity Now" />
          <br />
          <Button url="/services#plan" text="Choose Your Plan" />
        </div>
      }
    />
  </section>
);

export default Product;
