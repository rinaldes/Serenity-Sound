import { Card } from "@nextui-org/card";
import { Image } from "@/components";
import { StaticImageData } from "next/image";

interface CardProps {
  cardSize: string;
  alt: string;
  image: StaticImageData;
}

const ImageCard = ({ cardSize, alt, image }: CardProps) => (
  <Card className={cardSize}>
    <Image alt={alt} className="z-0 w-full h-full object-cover" src={image} />
  </Card>
);

export default ImageCard;
