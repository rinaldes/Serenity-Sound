import { Button, Card } from "@/components";
import { Subscribe } from "@/assets/Images";
import { Heading, Text } from "@/components/typography";
const Pricing = () => (
  <section
    id="product"
    className="gap-5 grid grid-cols-6 grid-rows-2 pt-12 pb-4 snap-end"
  >
    <Card image={Subscribe} alt="Cover Image" size="square" type="image" />
    <Card
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div className="text-center">
          <Heading
            type="h3"
            text="Ready to Start Your Journey Toward Serenity?"
          />
          <br />
          <Text type="p" text="Choose a plan that best fits your needs." />
          <Text
            type="p"
            text="Don't worry, you can change your plan at any time."
          />
          <br />
          <Button text="Compare Plans" url="#" />
        </div>
      }
    />
    <Card
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
          <br />
          <Button text="Get Started" url="#" />
        </div>
      }
    />
    <Card
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
          <br />
          <Button text="Get Started" url="#" />
        </div>
      }
    />
  </section>
);

export default Pricing;
