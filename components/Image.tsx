import { Image } from "@nextui-org/image";
import NextImage, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  removeWrapper?: boolean;
  size?: "large" | "small";
}
const ImageComponent = ({
  src,
  alt,
  className,
  size,
  removeWrapper,
}: ImageProps) => (
  <Image
    as={NextImage}
    width={size === "large" ? src.width / 4 : src.width}
    height={size === "large" ? src.height / 4 : src.height}
    alt={alt}
    src={src.src}
    className={className}
    removeWrapper={removeWrapper}
  />
);

export default ImageComponent;
