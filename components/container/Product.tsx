import { Button, Card } from "@/components";
import { Library2, TheApp } from "@/assets/Images";
import { Heading, Text } from "../typography";
const Product = () => (
  <section
    id="product"
    className="gap-5 grid md:grid-cols-6 md:grid-rows-2 pt-8"
  >
    <Card
      image={Library2}
      alt="A student listening music while studying"
      size="square"
      type="image"
    />
    <Card
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text="Your Music Sanctuary Awaits" />
          <br />
          <Text
            type="p"
            text="Serenity is the music streaming app designed to help you unwind, de-stress, and find moments of peace in your day."
          />
          <Text
            className="hidden md:block"
            type="p"
            text="Our curated playlists are meticulously crafted by music experts to soothe your soul and elevate your mood."
          />
        </div>
      }
    />
    <Card
      size="square"
      type="text"
      content={
        <div className="item-center text-center">
          <Heading type="h2" text="Serenity Music" />
          <br />
          <Text
            type="p"
            text="Personalized playlists for different moods and activities"
            className="auto-scroll-faster text-nowrap text-lg"
          />
          <Text
            type="p"
            text="Vast library of calming music"
            className="auto-scroll-fast text-nowrap text-xl"
          />
          <Text
            type="p"
            text="High-fidelity audio quality"
            className="auto-scroll-fastest text-nowrap text-md"
          />
          <Text
            type="p"
            className="hidden xl:block auto-scroll-fasting text-nowrap text-xl"
            text="Sleep timers and relaxation tools"
          />
        </div>
      }
    />
    <Card image={TheApp} alt="Serenity App" size="square" type="image" />
    <Card
      size="square"
      type="text"
      content={
        <div className="flex flex-col text-center items-center">
          <Heading type="h3" text="Get Your Journey with Serenity Now" />
          <br />
          <Button url="/services#pricing" text="Choose Your Plan" />
        </div>
      }
    />
  </section>
);

export default Product;
