import { Card, CardFooter } from "@nextui-org/card";

interface CardProps {
  cardSize: string;
  content?: JSX.Element;
}

const TextCard = ({ cardSize, content }: CardProps) => (
  <Card className={cardSize} isFooterBlurred>
    <CardFooter className="px-8 absolute z-10 w-full h-full flex items-center justify-center bg-white">
      {content}
    </CardFooter>
  </Card>
);

export default TextCard;
