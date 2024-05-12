import { Image } from "@nextui-org/image";
import NextImage, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  size?: "large" | "small";
  isZoomable?: boolean;
}
const ImageComponent = ({
  src,
  alt,
  className,
  size,
  isZoomable = true,
}: ImageProps) => (
  <Image
    as={NextImage}
    width={size === "large" ? src.width / 4 : src.width}
    height={size === "large" ? src.height / 4 : src.height}
    alt={alt}
    src={src.src}
    className={className}
    removeWrapper
    isZoomed={isZoomable}
    fallbackSrc={`https://via.placeholder.com/${src.width}x${src.height}`}
  />
);

export default ImageComponent;
