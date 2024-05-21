import { Image } from "@/components";
import { titleFont } from "@/config/fonts";
import { SerenityLogo, SerenityLogoBig } from "./Images";

interface LogoProps {
  type?: "small" | "large";
  variant?: "normal" | "width";
}

const LogoText = ({ type, variant }: LogoProps) => (
  <span
    className={`${titleFont.variable} font-title font-semibold text-black ${
      type === "large" ? "text-5xl" : "text-2xl"
    } my-auto`}
  >
    Serenity {variant === "width" ? "Company" : ""}
  </span>
);

const Logo = ({ type, variant }: LogoProps) => (
  <div className={`flex ${type === "large" ? "gap-5" : "gap-2"} `}>
    <Image
      src={type === "large" ? SerenityLogoBig : SerenityLogo}
      alt="Serenity Logo"
      size={type}
      className="mix-blend-multiply"
    />
    <LogoText type={type} variant={variant} />
  </div>
);

export default Logo;
