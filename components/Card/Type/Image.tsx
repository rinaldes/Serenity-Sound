import { Card } from "@nextui-org/card";
import { Image } from "@/components";
import { StaticImageData } from "next/image";

interface CardProps {
  cardSize: string;
  alt: string;
  image: StaticImageData;
  className?: string;
}

const ImageCard = ({ cardSize, alt, image, className }: CardProps) => (
  <Card className={cardSize + " " + className}>
    <Image alt={alt} className="z-0 w-full h-full object-cover" src={image} />
  </Card>
);

export default ImageCard;
