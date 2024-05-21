import { titleFont } from "@/config/fonts";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4";
  text: string;
  className?: string;
}

const headSize = (type: HeadingProps["type"]) => {
  return type === "h1"
    ? "text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
    : type === "h2"
    ? "text-xl lg:text-2xl"
    : type === "h3"
    ? "text-xl"
    : "text-lg";
};

const Heading = ({ type, text, className }: HeadingProps) => {
  const headMap: Record<HeadingProps["type"], keyof JSX.IntrinsicElements> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
  };
  const HeadType = headMap[type];
  return (
    <HeadType
      className={`${
        titleFont.variable
      } font-title font-bold text-black ${headSize(type)} ${className} `}
    >
      {text}
    </HeadType>
  );
};

export default Heading;
