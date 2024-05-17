interface TextProps {
  text: string;
  variant?: "italic" | "normal";
  type: "p" | "span";
  className?: string;
}
{
  /* 
  TODO: Revamp Later 
  Text Component will used for some text styling that used in anywhere
  */
}
const Text = ({
  type = "p",
  text,
  variant = "normal",
  className,
}: TextProps) => {
  const textMap: Record<TextProps["type"], keyof JSX.IntrinsicElements> = {
    p: "p",
    span: "span",
  };
  const TextType = textMap[type];
  return <TextType className={className}>{text}</TextType>;
};

export default Text;
