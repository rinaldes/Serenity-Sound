import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@/components";
import { StaticImageData } from "next/image";
import { Heading } from "@/components/typography";

interface CardProps {
  cardSize: string;
  alt: string;
  image: StaticImageData;
  className?: string;
}

const CoverCard = ({ cardSize, alt, image, className = "" }: CardProps) => (
  <Card className={cardSize + " " + className}>
    {/* <CardHeader className="absolute z-10 top-12 left-8 w-3/5 flex-col !items-start p-8 text-white-lavender">
      <Heading type="h1" text="Serenity Sound" />
      <Heading type="h3" text="Melt away your worries and soothe your soul" />
    </CardHeader> */}
    <div className="absolute z-0 top-0 left-0 w-1/5 h-1/2 bg-white-lavender"></div>
    <Image
      alt={alt}
      className="z-0 w-full h-full object-cover"
      src={image}
      isZoomable={false}
      priority={true}
    />
  </Card>
);

export default CoverCard;
