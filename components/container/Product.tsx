import { Card } from "@/components";
import { Library2 } from "@/assets/Images";
import { Heading, Text } from "../typography";
const Product = () => (
  <section
    id="product"
    className="gap-4 grid grid-cols-6 grid-rows-2 my-8 snap-end"
  >
    <Card image={Library2} alt="Cover Image" size="square" type="cover" />
    <Card
      image={Library2}
      alt="Cover Image"
      size="width"
      type="text"
      title={
        <div>
          <Heading type="h3" text="Your Music Sanctuary Awaits" />
          <Text
            type="p"
            text="Serenity is the music streaming app designed to help you unwind, de-stress, and find moments of peace in your day.  Our curated playlists are meticulously crafted by music experts to soothe your soul and elevate your mood."
          />
        </div>
      }
    />
    <Card image={Library2} alt="Cover Image" size="square" type="text" />
    <Card image={Library2} alt="Cover Image" size="square" type="text" />
    <Card image={Library2} alt="Cover Image" size="square" type="text" />
  </section>
);

export default Product;
