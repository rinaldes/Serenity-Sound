import { Image } from "@nextui-org/image";
import NextImage, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  alt: string;
}
const ImageComponent = ({ src, alt }: ImageProps) => (
  <Image
    as={NextImage}
    width={src.width}
    height={src.height}
    alt={alt}
    src={src.src}
  />
);

export default ImageComponent;
