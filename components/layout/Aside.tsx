import { PageIcon } from "@/assets/Icons";
import Link from "next/link";

const asideLinks: {
  href: string;
  icon: "Home" | "About" | "Service" | "Review";
}[] = [
  { href: "#", icon: "Home" },
  { href: "#company", icon: "About" },
  { href: "#product", icon: "Service" },
  { href: "#review", icon: "Review" },
];

const link = asideLinks.map(({ href, icon }) => (
  <Link key={icon} href={href}>
    <PageIcon name={icon} isActive={false} />
  </Link>
));

const Aside = () => (
  <aside className="flex flex-col items-center justify-end pb-20 h-full gap-12 text-gray-600 ">
    {link}
  </aside>
);

export default Aside;
