import { StaticImageData } from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button, Image } from ".";
import { Heading } from "./typography";

interface CardProps {
  type: "cover" | "text" | "combination";
  size: "square" | "cover" | "width" | "rectangle";
  alt: string;
  image: StaticImageData;
  title?: JSX.Element;
}

const CardComponent = ({ size, image, alt, type, title }: CardProps) => {
  let card;
  let cardSize;

  switch (size) {
    case "cover":
      cardSize = "col-span-6 h-[35.25rem]";
      break;
    case "width":
      cardSize = "col-span-4 h-[17rem]";
      break;
    case "rectangle":
      cardSize = "col-span-3 h-[17rem]";
      break;
    case "square":
      cardSize = "col-span-2 h-[17rem]";
      break;
  }
  switch (type) {
    case "cover":
      card = (
        <Card className={cardSize}>
          <CardHeader className="absolute z-10 top-12 left-8 w-3/5 flex-col !items-start">
            {/* <Heading type="h3" text="Melt away your worries and soothe your soul" />
        <Heading type="h1" text="Serenity Sound" /> */}
          </CardHeader>
          <Image
            removeWrapper
            alt={alt}
            className="z-0 w-full h-full object-cover"
            src={image}
          />
        </Card>
      );
      break;
    case "text":
      card = (
        <Card className={cardSize}>
          <CardHeader className="absolute z-10 w-full h-full flex items-center justify-center">
            {title}
          </CardHeader>
        </Card>
      );
      break;
    case "combination":
      card = (
        <Card className={cardSize}>
          <CardHeader className="absolute z-10 top-12 left-8 w-3/5 flex-col !items-start">
            <Heading type="h1" text="About Our Company" />
          </CardHeader>
          <Image
            removeWrapper
            alt={alt}
            className="z-0 w-full h-full object-cover"
            src={image}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
          </CardFooter>
        </Card>
      );
  }
  return card;
};

export default CardComponent;
