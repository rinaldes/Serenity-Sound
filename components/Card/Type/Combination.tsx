import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@/components";
import { StaticImageData } from "next/image";

interface CardProps {
  cardSize: string;
  alt: string;
  image: StaticImageData;
  content?: JSX.Element;
  variant?: string;
}

const CombinationCardVariant1 = ({
  cardSize,
  alt,
  image,
  content,
}: CardProps) => (
  <Card className={cardSize} isFooterBlurred>
    <Image alt={alt} className="z-0 w-full h-full object-cover" src={image} />
    <CardFooter className="text-tiny justify-between mb-1 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
      {content}
    </CardFooter>
  </Card>
);

const CombinationCardVariant2 = ({
  cardSize,
  alt,
  image,
  content,
}: CardProps) => (
  <Card className={cardSize} isFooterBlurred>
    <Image alt={alt} className="z-0 w-full h-full object-cover" src={image} />
    <CardFooter className="text-tiny justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute bottom-3 left-3 h-[calc(100%_-_24px)] before:rounded-xl rounded-large w-[calc(100%_-_24px)] shadow-small z-10">
      {content}
    </CardFooter>
  </Card>
);

const CombinationCard = ({
  cardSize,
  alt,
  image,
  content,
  variant = "1",
}: CardProps) =>
  variant === "1"
    ? CombinationCardVariant1({ cardSize, alt, image, content })
    : CombinationCardVariant2({ cardSize, alt, image, content });

export default CombinationCard;
