"use client";
import { siteConfig } from "@/config/site";
import { PageAside, SocialAside } from "./LinkIcon";
import { usePathname } from "next/navigation";

const Aside = ({ type }: { type: "page" | "social" }) => {
  const pathName = usePathname();
  const currentPath =
    pathName === "/about"
      ? siteConfig.aboutLinks
      : pathName === "/teams"
      ? siteConfig.teamsLinks
      : pathName === "/services"
      ? siteConfig.servicesLinks
      : siteConfig.homeLinks;
  return (
    <aside className="flex flex-col items-center justify-end pb-16 h-full gap-8 text-gray-600 ">
      {type === "page" ? <PageAside path={currentPath} /> : <SocialAside />}
    </aside>
  );
};

export default Aside;
