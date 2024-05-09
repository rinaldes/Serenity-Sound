import {
  House,
  Building,
  NotePencil,
  Package,
  GithubLogo,
  XLogo,
  InstagramLogo,
  EnvelopeSimple,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

interface pageProps {
  name: "Home" | "About" | "Review" | "Service";
  isActive: boolean;
}

interface socialProps {
  name: "Github" | "Twitter" | "Instagram" | "Linkedin" | "Email";
}

const iconPageMap = {
  Home: House,
  About: Building,
  Review: NotePencil,
  Service: Package,
};

const iconSocialMap = {
  Github: GithubLogo,
  Twitter: XLogo,
  Instagram: InstagramLogo,
  Linkedin: LinkedinLogo,
  Email: EnvelopeSimple,
};

export const PageIcon = ({ name, isActive }: pageProps) => {
  const weight = isActive ? "fill" : "regular";
  const IconComponent = iconPageMap[name];
  return (
    <IconComponent
      weight={weight}
      alt={`${name} icon for ${name} of Serenity Sound Website`}
    />
  );
};

export const SocialIcon = ({ name }: socialProps) => {
  const alt =
    name === "Email"
      ? `${name} icon for Contacting Serenity Sound`
      : `${name} icon for Serenity Sound's ${name} profile`;
  const IconComponent = iconSocialMap[name];
  return <IconComponent alt={alt} />;
};
