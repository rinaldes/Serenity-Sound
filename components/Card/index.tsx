import { StaticImageData } from "next/image";
import { CombinationCard, CoverCard, TextCard, ImageCard } from "./Type";

interface CardProps {
  type: "cover" | "text" | "combination" | "image";
  size: "square" | "cover" | "width" | "rectangle";
  alt: string;
  image?: StaticImageData;
  content?: JSX.Element;
  variant?: string;
  className?: string;
}

const CardComponent = ({
  size,
  image,
  alt,
  type,
  content,
  variant = "1",
  className = "",
}: CardProps) => {
  const Card = {
    cover: CoverCard,
    image: ImageCard,
    text: TextCard,
    combination: CombinationCard,
  }[type];

  const cardSize = {
    cover: "md:col-span-6 h-[35.25rem]",
    width: "md:col-span-4 h-[16.15rem]",
    rectangle: "md:col-span-3 h-[16.15rem]",
    square: "md:col-span-2 h-[16.15rem]",
  }[size];
  return (
    <Card
      cardSize={cardSize}
      alt={alt}
      image={image!}
      content={content}
      variant={variant}
      className={className}
    />
  );
};

export default CardComponent;
