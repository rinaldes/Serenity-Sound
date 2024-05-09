import { Image } from "@/components";
import { bodyFont, titleFont } from "@/config/fonts";
import SerenityLogo from "@/public/images/serenity-logo-sm.webp";

const Logo = () => (
  <div className="flex gap-2 ">
    <Image src={SerenityLogo} alt="Serenity Logo" />
    <span
      className={`${titleFont.variable} font-title font-semibold text-black text-2xl my-auto`}
    >
      Serenity
    </span>
  </div>
);

export default Logo;
