import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@/components";
import { StaticImageData } from "next/image";
import { Heading } from "@/components/typography";
import Logo from "@/assets/Logo";
import { SerenityLogoBig } from "@/assets/Images";

interface CardProps {
  cardSize: string;
  alt: string;
  image: StaticImageData;
  className?: string;
}

const CoverCard = ({ cardSize, alt, image, className = "" }: CardProps) => (
  <Card className={cardSize + " " + className}>
    <CardHeader className="absolute z-10 bottom-10 left-10 w-full md:w-fit gap-4 flex-row p-8 text-black bg-white-lavender rounded-2xl backdrop-filter backdrop-blur-[0.5rem] bg-opacity-50 ">
      <Image
        alt="Logo"
        className="w-24 h-24 hidden md:block"
        src={SerenityLogoBig}
      />
      <div>
        <Heading
          type="h1"
          text="Serenity Sound"
          className="text-dark-lavender text-xl sm:text-4xl md:text-6xl"
        />
        <Heading type="h3" text="Melt away your worries and soothe your soul" />
      </div>
    </CardHeader>
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
