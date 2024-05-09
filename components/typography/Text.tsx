interface TextProps {
  text: string;
  type: "p" | "span";
}
{
  /* 
  TODO: Revamp Later 
  Text Component will used for some text styling that used in anywhere
  */
}
const Text = ({ type = "p", text }: TextProps) => {
  const textMap: Record<TextProps["type"], keyof JSX.IntrinsicElements> = {
    p: "p",
    span: "span",
  };
  const TextType = textMap[type];
  return <TextType>{text}</TextType>;
};

export default Text;
