import { PageIcon } from "@/assets/Icons";
import { siteConfig } from "@/configs/sites";
import Link from "next/link";

const link = siteConfig.homeLinks.map(({ href, icon }) => (
  <Link key={icon} href={href}>
    <PageIcon
      name={icon as "Home" | "About" | "Service" | "Review"}
      isActive={false}
    />
  </Link>
));

const Aside = () => (
  <aside className="flex flex-col items-center justify-end pb-20 h-full gap-12 text-gray-600 ">
    {link}
  </aside>
);

export default Aside;
