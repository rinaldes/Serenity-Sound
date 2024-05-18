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
  List,
  X,
} from "@phosphor-icons/react/dist/ssr";

export interface pageProps {
  name: "Home" | "About" | "Review" | "Service";
  isActive: boolean;
}

export interface socialProps {
  name: "Github" | "Twitter" | "Instagram" | "Linkedin" | "Email";
}

export const iconPageMap = {
  Home: House,
  About: Building,
  Review: NotePencil,
  Service: Package,
};

export const iconSocialMap = {
  Github: GithubLogo,
  Twitter: XLogo,
  Instagram: InstagramLogo,
  Linkedin: LinkedinLogo,
  Email: EnvelopeSimple,
};

export { List, X };
