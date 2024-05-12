import { Card } from "@/components";
import { Library2 } from "@/assets/Images";
import { Heading, Text } from "@/components/typography";
const Pricing = () => (
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
          <Heading
            type="h2"
            text="Ready to Start Your Journey Toward Serenity?"
          />
          <br />
          <Heading type="h3" text="Find Your Perfect Plan with Serenity" />
        </div>
      }
    />
    <Card
      image={Library2}
      alt="Cover Image"
      size="rectangle"
      type="text"
      content={
        <div>
          <Heading type="h2" text="Serenity Breathe" />
          <br />
          <Text
            type="p"
            text="Take a deep breath and find moments of calm with our complimentary tier."
          />
        </div>
      }
    />
    <Card
      image={Library2}
      alt="Cover Image"
      size="rectangle"
      type="text"
      content={
        <div>
          <Heading type="h2" text="Serenity Unwind" />
          <br />
          <Text
            type="p"
            text="Upgrade to Serenity Unwind and unlock a world of personalized peace."
          />
        </div>
      }
    />
  </section>
);

export default Pricing;
