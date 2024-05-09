interface HeadingProps {
  type: "h1" | "h2" | "h3";
  text: string;
}

const Heading = ({ type, text }: HeadingProps) => {
  const headingMap: Record<HeadingProps["type"], keyof JSX.IntrinsicElements> =
    {
      h1: "h1",
      h2: "h2",
      h3: "h3",
    };
  const Heading = headingMap[type];
  return <Heading>{text}</Heading>;
};

export default Heading;
