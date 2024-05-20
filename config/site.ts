export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Serenity Sound",
  description: "Music can sooth your soul and melt away your worries.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Our Teams",
      href: "/teams",
    },
    {
      label: "Our Services",
      href: "/services",
    },
  ],
  socialLinks: [
    { href: "mailto:rinaldes.duma@hotmail.com", icon: "Email" },
    { href: "https://www.linkedin.com/in/rinaldes", icon: "Linkedin" },
    { href: "https://www.instagram.com/rinaldes.d", icon: "Instagram" },
    { href: "https://x.com/RinaldesD", icon: "Twitter" },
    { href: "https://github.com/rinaldes", icon: "Github" },
  ],
  homeLinks: [
    { href: "#home", icon: "Home" },
    { href: "#company", icon: "About" },
    { href: "#product", icon: "Service" },
    { href: "#review", icon: "Review" },
  ],
  aboutLinks: [
    { href: "#company", icon: "About" },
    { href: "#history", icon: "History" },
    { href: "#team", icon: "Team" },
    { href: "#culture", icon: "Culture" },
  ],
  teamsLinks: [
    { href: "#team", icon: "Team" },
    { href: "#music_curator", icon: "Music Curator" },
    { href: "#audio_spesialist", icon: "Audio Spesialist" },
    { href: "#app_developer", icon: "App Developer" },
  ],
  servicesLinks: [
    { href: "#product", icon: "Service" },
    { href: "#review", icon: "Review" },
    { href: "#pricing", icon: "Pricing" },
  ],
};
