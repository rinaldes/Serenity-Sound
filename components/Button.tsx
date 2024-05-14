import { Button } from "@nextui-org/button";
import Link from "next/link";
import { type } from "os";

interface ButtonProps {
  text: string;
  url: string;
  type?: "primary" | "secondary";
}

const ButtonComponent = ({ url, text, type = "secondary" }: ButtonProps) => (
  <Button href={url} as={Link} color={type} variant="solid">
    {text}
  </Button>
);

export default ButtonComponent;
