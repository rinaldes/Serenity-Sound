import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { Heading } from "@/components/typography";
import { SerenityLogoBig, CoverImage } from "@/assets/Images";

interface CardProps {
  cardSize: string;
  className?: string;
}

const CoverCard = ({ cardSize, className = "" }: CardProps) => (
  <Card className={cardSize + " " + className}>
    <CardHeader className="absolute z-10 bottom-10 left-10 w-full md:w-fit gap-4 flex-row p-8 text-black bg-white-lavender rounded-2xl backdrop-filter backdrop-blur-[0.5rem] bg-opacity-50 flex">
      <Image
        alt="Logo"
        className="w-24 h-24 hidden md:block"
        src={SerenityLogoBig}
      />
      <div>
        <Heading
          type="h1"
          text="Serenity Sound"
          className="text-dark-lavender"
        />
        <Heading type="h2" text="Melt away your worries and soothe your soul" />
      </div>
    </CardHeader>
    <picture>
      <source media="(max-width: 37.5em)" srcSet={CoverImage.srcAlt} />
      <source media="(min-width: 62em)" srcSet={CoverImage.src} />
      <Image
        alt="A girl listening music with Serenity anywhere"
        className="z-0 w-full h-full object-cover"
        src={CoverImage}
        priority={true}
        fill
      />
    </picture>
  </Card>
);

export default CoverCard;
