import { Image } from "@nextui-org/image";
import NextImage, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  size?: "large" | "small" | "smol";
}

const sizeChecker = (num: number, size: ImageProps["size"]) => {
  return size === "large" ? num / 4 : size === "smol" ? num / 1.5 : num;
};

const ImageComponent = ({ src, alt, className, size }: ImageProps) => (
  <Image
    as={NextImage}
    width={sizeChecker(src.width, size)}
    height={sizeChecker(src.height, size)}
    alt={alt}
    src={src.src}
    className={className}
    removeWrapper
    isZoomed
    fallbackSrc={`https://via.placeholder.com/${src.width}x${src.height}`}
  />
);

export default ImageComponent;
