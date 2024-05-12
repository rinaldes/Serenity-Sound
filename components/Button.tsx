import { Button } from "@nextui-org/button";
import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
}

const ButtonComponent = ({ url, text }: ButtonProps) => (
  <Button href={url} as={Link} color="primary" variant="solid">
    {text}
  </Button>
);

export default ButtonComponent;
