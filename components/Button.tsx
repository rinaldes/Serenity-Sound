"use client";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
}

const ButtonComponent = ({
  url,
  text,
  type = "secondary",
  onClick = () => {},
}: ButtonProps) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    className="w-fit h-fit"
  >
    <Button href={url} as={Link} color={type} variant="solid" onClick={onClick}>
      {text}
    </Button>
  </motion.div>
);

export default ButtonComponent;
