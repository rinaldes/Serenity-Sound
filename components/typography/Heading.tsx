import { titleFont } from "@/config/fonts";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4";
  text: string;
  className?: string;
}

const Heading = ({ type, text, className }: HeadingProps) => {
  switch (type) {
    case "h1":
      return (
        <h1
          className={`${titleFont.variable} font-bold font-title text-6xl text-black ${className}`}
        >
          {text}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${titleFont.variable} font-bold font-title text-xl lg:text-3xl ${className}`}
        >
          {text}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${titleFont.variable} font-semibold font-title text-xl ${className}`}
        >
          {text}
        </h3>
      );
    case "h4":
      return (
        <h3
          className={`${titleFont.variable} font-semibold font-title text-lg ${className}`}
        >
          {text}
        </h3>
      );
  }
};

export default Heading;
