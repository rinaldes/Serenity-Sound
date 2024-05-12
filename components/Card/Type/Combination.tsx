import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@/components";
import { StaticImageData } from "next/image";

interface CardProps {
  cardSize: string;
  alt: string;
  image: StaticImageData;
  content?: JSX.Element;
}

const CombinationCard = ({ cardSize, alt, image, content }: CardProps) => (
  <Card className={cardSize} isFooterBlurred>
    <Image
      removeWrapper
      alt={alt}
      className="z-0 w-full h-full object-cover"
      src={image}
    />
    <CardFooter className="text-tiny justify-between mb-1 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
      {content}
    </CardFooter>
  </Card>
);

export default CombinationCard;
