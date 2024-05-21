interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className }: TextProps) => (
  <p className={`${className}`}>{text}</p>
);

export default Text;
