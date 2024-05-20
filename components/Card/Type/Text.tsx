import { Card, CardFooter } from "@nextui-org/card";

interface CardProps {
  cardSize: string;
  content?: JSX.Element;
  className?: string;
}

const TextCard = ({ cardSize, content, className }: CardProps) => (
  <Card className={cardSize + " " + className} isFooterBlurred>
    <CardFooter className=" hover:bg-gray-50 px-8 absolute z-10 w-full h-full flex items-center justify-center bg-white">
      {content}
    </CardFooter>
  </Card>
);

export default TextCard;
