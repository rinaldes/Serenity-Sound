import { StaticImageData } from "next/image";
import { CombinationCard, CoverCard, TextCard, ImageCard } from "./Type";
import { dummyImage } from "@/assets/Images";

interface CardProps {
  type: "cover" | "text" | "combination" | "image";
  size: "square" | "cover" | "width" | "rectangle";
  alt: string;
  image?: StaticImageData;
  content?: JSX.Element;
}

const CardComponent = ({ size, image, alt, type, content }: CardProps) => {
  const Card = {
    cover: CoverCard,
    image: ImageCard,
    text: TextCard,
    combination: CombinationCard,
  }[type];

  const cardSize = {
    cover: "col-span-6 h-[35.25rem]",
    width: "col-span-4 h-[17rem]",
    rectangle: "col-span-3 h-[17rem]",
    square: "col-span-2 h-[17rem]",
  }[size];

  return (
    <Card
      cardSize={cardSize}
      alt={alt}
      image={image ?? dummyImage}
      content={content}
    />
  );
};

export default CardComponent;