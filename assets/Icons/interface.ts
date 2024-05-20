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
  Clock,
  UsersThree,
  UserSound,
  ComputerTower,
  Headphones,
  PianoKeys,
  CreditCard,
} from "@phosphor-icons/react/dist/ssr";

export interface pageProps {
  icon:
    | "Home"
    | "About"
    | "Review"
    | "Service"
    | "History"
    | "Culture"
    | "Team"
    | "App Developer"
    | "Audio Spesialist"
    | "Music Curator"
    | "Pricing";
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
  History: Clock,
  Culture: UserSound,
  Team: UsersThree,
  "App Developer": ComputerTower,
  "Audio Spesialist": Headphones,
  "Music Curator": PianoKeys,
  Pricing: CreditCard,
};

export const iconSocialMap = {
  Github: GithubLogo,
  Twitter: XLogo,
  Instagram: InstagramLogo,
  Linkedin: LinkedinLogo,
  Email: EnvelopeSimple,
};

export { List, X };
