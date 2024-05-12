import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@/components";
import { StaticImageData } from "next/image";

interface CardProps {
  cardSize: string;
  alt: string;
  image: StaticImageData;
}

const CoverCard = ({ cardSize, alt, image }: CardProps) => (
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

export default CoverCard;