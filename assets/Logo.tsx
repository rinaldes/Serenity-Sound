import { Image } from "@/components";
import { titleFont } from "@/configs/fonts";
import SerenityLogo from "@/public/logos/serenity-logo-sm.webp";
import SerenityLogoBig from "@/public/logos/serenity-logo.webp";

interface LogoProps {
  type?: "small" | "large";
  variant?: "normal" | "width";
}

const Logo = ({ type, variant }: LogoProps) => (
  <div className={`flex ${type === "large" ? "gap-5" : "gap-2"} `}>
    <Image
      src={type === "large" ? SerenityLogoBig : SerenityLogo}
      alt="Serenity Logo"
      size={type}
    />
    <span
      className={`${titleFont.variable} font-title font-semibold text-black ${
        type === "large" ? "text-5xl" : "text-2xl"
      } my-auto`}
    >
      Serenity {variant === "width" ? "Company" : ""}
    </span>
  </div>
);

export default Logo;
