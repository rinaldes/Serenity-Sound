import { Button, Card } from "@/components";
import { Subscribe } from "@/assets/Images";
import { Heading, Text } from "@/components/typography";
import Plan from "./Plan";

const Pricing = () => (
  <section id="pricing" className="gap-5 grid md:grid-cols-6 pt-8">
    <Card
      image={Subscribe}
      alt="Some Student subscribing to Serenity App"
      size="square"
      type="image"
    />
    <Card
      size="width"
      type="text"
      content={
        <div className="text-center flex flex-col items-center ">
          <Heading
            type="h3"
            text="Ready to Start Your Journey Toward Serenity?"
            className="hidden md:block"
          />
          <Heading
            type="h3"
            text="Start Your Journey Toward Serenity"
            className="block md:hidden"
          />
          <br />
          <Text
            text="Choose a plan that best fits your needs."
            className="hidden md:block"
          />
          <Text text="Don't worry, you can change your plan at any time." />
          <br />
          <Button text="Compare Plans" url="#" />
        </div>
      }
    />
    <div className="col-span-6">
      <Plan />
    </div>
  </section>
);

export default Pricing;
