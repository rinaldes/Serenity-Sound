import { Card } from "@/components";
import { Library1 } from "@/assets/Images";
import { Heading, Text } from "../typography";
import { Avatar } from "@nextui-org/avatar";
import "./review.css";
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
      content={
        <Heading
          type="h3"
          text="Hear What Our Users Are Saying About Serenity"
        />
      }
    />
    <Card image={Library1} alt="Cover Image" size="square" type="cover" />
    <article className="w-[200%] col-span-6 overflow-hidden auto-scroll">
      <div className="w-[100%] grid grid-cols-12 gap-8 pb-8">
        <Card
          image={Library1}
          alt="Cover Image"
          size="rectangle"
          type="text"
          content={
            <article className="px-8">
              <Text
                type="p"
                variant="italic"
                text="‟ Serenity has been my go-to app for unwinding after a long day. The curated playlists are amazing, and the app is so easy to use. ”"
              />
              <br />
              <br />
              <div className="grid grid-cols-[1fr_5fr]">
                <Avatar
                  isBordered
                  radius="full"
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  size="lg"
                />
                <div>
                  <Heading type="h3" text="Sarah W." />
                  <p>Marketing professional</p>
                </div>
              </div>
            </article>
          }
        />
        <Card
          image={Library1}
          alt="Cover Image"
          size="rectangle"
          type="text"
          content={
            <article className="px-8">
              <Text
                type="p"
                variant="italic"
                text="‟ I struggle with sleep anxiety, but listening to Serenity's sleep soundscapes has been a game-changer. I finally feel like I can relax and drift off to sleep peacefully. ”"
              />
              <br />
              <br />
              <div className="grid grid-cols-[1fr_5fr]">
                <Avatar
                  isBordered
                  radius="full"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  size="lg"
                />
                <div>
                  <Heading type="h3" text="David L." />
                  <p>Geography Photographer</p>
                </div>
              </div>
            </article>
          }
        />
        <Card
          image={Library1}
          alt="Cover Image"
          size="rectangle"
          type="text"
          content={
            <article className="px-8">
              <Text
                type="p"
                variant="italic"
                text="‟ Serenity has been my go-to app for unwinding after a long day. The curated playlists are amazing, and the app is so easy to use. ”"
              />
              <br />
              <br />
              <div className="grid grid-cols-[1fr_5fr]">
                <Avatar
                  isBordered
                  radius="full"
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  size="lg"
                />
                <div>
                  <Heading type="h3" text="Sarah W." />
                  <p>Marketing professional</p>
                </div>
              </div>
            </article>
          }
        />
        <Card
          image={Library1}
          alt="Cover Image"
          size="rectangle"
          type="text"
          content={
            <article className="px-8">
              <Text
                type="p"
                variant="italic"
                text="‟ I struggle with sleep anxiety, but listening to Serenity's sleep soundscapes has been a game-changer. I finally feel like I can relax and drift off to sleep peacefully. ”"
              />
              <br />
              <br />
              <div className="grid grid-cols-[1fr_5fr]">
                <Avatar
                  isBordered
                  radius="full"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  size="lg"
                />
                <div>
                  <Heading type="h3" text="David L." />
                  <p>Geography Photographer</p>
                </div>
              </div>
            </article>
          }
        />
      </div>
    </article>
  </section>
);

export default Review;
