import { Image } from "@nextui-org/image";
import NextImage, { StaticImageData } from "next/image";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  size?: "large" | "small" | "smol";
  isZoomable?: boolean;
  priority?: boolean;
}
const ImageComponent = ({
  src,
  alt,
  className,
  size,
  isZoomable = true,
  priority = false,
}: ImageProps) => (
  <Image
    as={NextImage}
    width={
      size === "large"
        ? src.width / 4
        : size === "smol"
        ? src.width / 1.5
        : src.width
    }
    height={
      size === "large"
        ? src.height / 4
        : size === "smol"
        ? src.height / 1.5
        : src.height
    }
    alt={alt}
    src={src.src}
    className={className}
    removeWrapper
    priority={priority}
    isZoomed={isZoomable}
    fallbackSrc={`https://via.placeholder.com/${src.width}x${src.height}`}
  />
);

export default ImageComponent;
